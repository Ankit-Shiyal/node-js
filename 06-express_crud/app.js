

import express from "express"
import httpError from "./middleware/httpError.js"

const app= express()

app.use(express.json())

const taskList =[
    {
        id: 1,
        task : "Ridding",
        description : "book ridding on day"
    },
    {
        id: 2,
        task : "Run",
        description : "running 1 km"
    },

]

app.get("/", (req, res)=>{
    res.send("hello from server")
})

app.get("/taskList", (req, res)=>{
    if(taskList.length ===0){
        return res.status(200).json({
            message: "Task not available"
        })
    }

     res
    .status(200)
    .json({message : "task list" , taskList});
})


app.use((req, res, next)=>{
    return next(new httpError ("requested route not found", 404))
})

app.use((error, req, res, next)=>{
    if(res.headersSent){
        return next(error)
    }

    res.status(error.statusCode || 500).json({
        message: error.message || "something want wrong please try again"
    })
})


const port = 5000

app.listen(port, (err)=>{
    if(err){
        console.log(err.message)
    }

    console.log(`server running on port ${port}`)
})