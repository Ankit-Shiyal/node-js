
import express from "express";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import authRouter from "./router/authRouter.js"

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.set("view engine", "ejs");

app.get("/", (req, res, ) => {
    res.render("home");
})

app.use((req, res, next) => {
    return next(new HttpError("requited routs not found ", 404))
})

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(new HttpError(error.message))
    }

    res.status(error.statusCode || 500).json({
        message: error.message || "internal server error"
    })
})

const port = 5000;

async function serverStart() {

    try {

        const connect = await connectDB();
        if (!connect) {
            return next(new HttpError("failed to connect DB"))
        }
        app.listen(port, (err) => {
            if (err) {
                return console.log(err.message)
            }
            console.log(`server running on port ${port}`)
        })

    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
serverStart()