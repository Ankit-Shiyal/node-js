
import express from "express"

import HttpError from "./middleware/httpError.js"
import connectDB from "./config/db.js";



const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("hello from server");
});



const port = 5000;

async function startServer() {

    try{
        await connectDB();

        
        app.listen(port, (err) => {

            if (err) {
                return console.log(err.message)
            }

            console.log(`server running on port ${port}`)
        })
    }
    catch (error) {

        console.log(error.message)

        process.exit(1)
    }

}

startServer()
