
import express from "express";

import HttpError from "./middleware/HttpError.js";

import connectDB from "./config/db.js";

import dotenv from "dotenv";

dotenv.config({ path: "./.env" });


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "hello form server" })
})

app.use((req, res, next) => {
    return next(new HttpError("requested routes not found", 404))
})

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }

    res.status(error.statusCode || 500).json({
        message: error.message || "something want wrong try again "
    })
})

const port = 5000;



async function ServerStart() {

    try {
        const connect = await connectDB();

        if (!connect) {
            throw new Error("failed to connect db");
        }

        app.listen(port, (err) => {
            if (err) {
                return console.log("err.message")
            }
            console.log(`server running on poet ${port}`)
        })


    } catch (error) {
        console.log(error.message)
        process.exit(1);

    }
}
ServerStart()