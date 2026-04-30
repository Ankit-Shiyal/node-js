

import express from "express"

const app = express()

app.get("/", (req, res)=>{
    res.send("this is practice home page")
})

app.get("/about", (req, res)=>{
    res.send("this is practice about page")
})

const port = 5000

app.listen(port, (err)=>{

    if(err){
        console.log(err.message)
    }
    console.log("server is running")
})