
import express from "express"

import HttpError from "./middleware/httpError.js"



const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("hello from server");
});



const port=5000;

app.listen(port,(err)=>{

    if(err){
        return console.log(err.message)
    }

    console.log(`server running on port ${port}`)
})
