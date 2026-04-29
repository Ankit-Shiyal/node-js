
import http from "http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("this page is home ")
    }
    else if (req.url === "/about") {
        res.end("this page is about ")
    }
    else {
        res.end("page not found")
    }
})

const port = 5000

server.listen(port, (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("server running on port 5000")

});