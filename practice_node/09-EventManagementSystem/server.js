
import express from "express"

import HttpError from "./middleware/HttpError.js"


const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "hello from server" })

})

app.use((req, res, next)=>{
    return next(new HttpError("requested routs not found",404 ))
})

app.use((error, req, res, next)=>{

    if(res.headersSent){
        return next(error)
    }

    res.status(error.statusCode || 500).json({
        message: error.message || "internal severe error"
    })

})


const port = 5000

app.listen(port, (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(`server running on port ${port}`);
});