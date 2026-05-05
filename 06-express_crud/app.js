

import express from "express"

const app= express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("hello from server")
})


const port = 5000

app.listen(port, (err)=>{
    if(err){
        console.log(err.message)
    }

    console.log(`server running on port ${port}`)
})