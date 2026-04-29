

import http from "http"

const server = http.createServer((req, res)=>{

    res.end("this is server from node js")

    
})

const port = 5000

server.listen(port,(err)=>{

    if(err){
        console.log(err.message)
        return
    }

    console.log("server")

})