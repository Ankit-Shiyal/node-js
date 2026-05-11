

import express from "express"
import httpError from "./middleware/httpError.js"
import e from "express"

const app = express()

app.use(express.json())

const studentList = [
    {
        id: 1,
        name: "Ankit",
        course: "full stack Development "
    }

    , {
        id: 2,
        name: " Dharmik",
        course: "web Development"
    }
]

app.get('/', (rwq, res, next) => {
    res.send("HELLO from server")
})

app.get("/studentList", (req, res, next) => {

    if (studentList.length === 0) {
        return res.status(200).json({ message: "student not available" })
    }

    res.status(200).json({ message: "student list ", studentList })
})


app.get("/studentList/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const student = studentList.find((s) => s.id === id)

    if (!student) {
        return res.status(404).json({ success: true, message: "no student data found with this id" })
    }

    res.status(200).json({
        success: true, message: "student data found", student
    })
})

app.post("/addStudent", (req, res, next) => {

    const { name, course } = req.body

    if (!name || !course) {
        return next(new httpError("name or course data are required"))
    }

    const newStudent = {
        id: new Date().getTime(),
        name,
        course,

    }
    studentList.push(newStudent)

    res.status(202).json({ success: true, message: "new student added successfully", newStudent })

})

app.patch("/updateStudent/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const studentData = studentList.find((s) => s.id === id)

    if (!studentData) {
        return next(new httpError("name not found with this id for update", 404))
    }

    const { name, course } = req.body

    if (name) {
        studentData.name = name
    }

    if (course) {
        studentData.course = course
    }

    if (!name || !course) {
        return next(new httpError("name or course is required", 404))
    }

    res.status(200).json({
        success: true,
        message: "student data update successfully",
        studentData,
    })
})



app.delete("/studentList/:id", (req,res,next)=>{

const id = Number(req.params.id)

const index = studentList.findIndex((s)=>s.id===id)

if(index === -1){
    return next(new httpError("requested route not found", 404))
}

 studentList.splice(index, 1)

 res.status(200).json({
    success: true,
    message:"student data deleted successfully"
 })
})


app.use((error, req, res, next) => {
    return next(new httpError("requested route not found", 404))
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }

    res.status(error.statusCode || 500).json({
        message: error.message || "something want wrong "
    })
})


const port = 5000
app.listen(port, (err) => {

    if (err) {
        console.log(err.message)
    }

    console.log(`server is running on port ${port}`)
})