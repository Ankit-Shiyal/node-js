

import express from "express";
import HttpError from "./middleware/HttpError.js";

import connectDB from "./config/db.js";

import EmployeeRoutes from "./routes/EmployeeRoutes.js"

const app = express()

app.use(express.json())

app.use("/employee", EmployeeRoutes)

app.get("/", (req, res) => {
    res.send("hello from server")
})

app.use((req, res, next) => {
    return next(new HttpError("requested routs not found"))
})

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }

    res.status(error.statusCode || 500).json({
        message: error.message || "something went wrong"
    })
})


const port = 5000;


async function serverStart() {

    try {
        const connect = await connectDB();

        if(!connect){
            throw new Error ("filed to connect DB")
        }

        app.listen(port, (err) => {
            if (err) {
                return console.log(err.message)
            }

            console.log(`server ruining on port ${port}`)
        })

    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}
serverStart()