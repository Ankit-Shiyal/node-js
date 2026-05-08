

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

app.get("/", (req, res, next)=>{
    res.send("hello from server")
})

app.get("/taskList", (req, res, next)=>{
    if(taskList.length ===0){
        return res.status(200).json({
            message: "Task not available"
        })
    }

     res
    .status(200)
    .json({message : "task list" , taskList});
})


app.get("/taskList/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const task = taskList.find((t) => t.id === id);

  if (!task) {
    return res
      .status(404)
      .json({ success: true, message: "no taskData found with this id" });
  }

  res.status(200).json({ success: true, message: "task found", task });

});

app.post("/addTask", (req, res, next) => {
  const { task, description } = req.body;

  if (!task || !description) {
    return next(new httpError("task or description data are required", 400));
  }

  const newTask = {
    id: new Date().getTime(),
    task,
    description,
  };

  taskList.push(newTask);

  res
    .status(201)
    .json({ success: true, message: "new Task added successfully", newTask });
});




app.delete("/taskList/:id", (req, res, next) => {

    const id = Number(req.params.id)

    const index = taskList.findIndex((t) => t.id === id)

    if(index === -1){
        return next(new httpError("requested route not found", 404))
    }

    taskList.splice(index, 1)

    res.status(200).json({
        success: true,
        message: "task data deleted successfully"
    })

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