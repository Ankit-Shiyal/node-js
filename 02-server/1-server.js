

import http from "http"

const server = http.createServer((req, res)=>{

    res.end("this is server")
    
})

const port = 5000

server.listen(port,(err)=>{

    if(err){
        console.log(err.message)
        return
    }


})