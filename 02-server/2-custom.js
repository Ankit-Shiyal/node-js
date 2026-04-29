
import http from "http"

const server = http.createServer((req, res)=>{


    res.writeHead(200,{"content-type": "text/html"})
    res.end("<h2>Hello from text html</h2>")
})

const port = 5000

server.listen(port,(err)=>{

    if(err){
        console.log(err.message)
        return
    }

    console.log("server from text html")
})