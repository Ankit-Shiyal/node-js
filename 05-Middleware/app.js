

import express from "express"
import helmet from "helmet"

const app = express()


// external Middleware 
// helmet
app.use(helmet())

// application Middleware

app.use(express.json())

app.get("/", (req, res) => {
    res.send("this is home page from server")
})

// routes level Middleware

app.get("/about", (req, res) => {
    res.send(" this is about page from server")
})

// undefined routs level Middleware

app.use((req, res) => {
    res.status(404).send("page not found in server")
})

// centralized error Middleware


app.use((error, req, res, next) => {
  if (req.headersSent) {
    next(error);
  }
  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});



const port = 5000

app.listen(port, (err) => {
    if (err) {
        console.log(err.message)
    }

    console.log(`server running on port ${port}`)
})
