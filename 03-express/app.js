

import express from "express"

const app = express()

app.get("/", (req ,res)=>{

    res.send("this is home page")

})

app.get("/about", (req ,res)=>{

    res.send("this is about page")

})

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server running on port", port);
});

