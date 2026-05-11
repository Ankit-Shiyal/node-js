import express from 'express';
import httpError from "./middleware/httpError.js"

const app = express();

app.use(express.json());

const studentList = [
    {
        id: 1,
        name: 'ankit',
        course: 'full stack',
    },
    {
        id: 2,
        name: 'Dharmik',
        course: 'web developer',
    },
]

app.get('/', (req, res, next) => {
    res.send('HELLO from server');
});

app.get('/studentList', (req, res, next) => {
    if (studentList.length === 0) {
        return next(new httpError("student not found", 404))
    }
    res.status(200).json({ message: "student List", studentList })
});

app.get("/studentList/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const newStudent = studentList.find((s) => s.id === id);

    if (!newStudent) {
        return next(new httpError("student not found", 404))
    }
    res.status(200).json({
        success: true,
        message: "student found", newStudent
    })
})

app.post("/addStudent", (req, res, next) => {
    const { name, course } = req.body

    if (!name || !course) {
        return next(new httpError("name and course are required", 400))
    }

    const newStudent = {
        id: new Date().getTime(),
        name,
        course
    }

    studentList.push(newStudent)

    res.status(201).json({
        success: true,
        message: "new student added successfully",
        newStudent
    })
})

app.patch("/updateStudent/:id", (req, res, next) => {

    const id = Number(req.params.id);

    const student = studentList.find((s) => s.id === id);

    if (!student) {
        return next(new httpError("student not found", 404))
    }

    const { name, course } = req.body;
    if (!name) {
        return next(new httpError("name is required", 400))
    }
    if (!course) {
        return next(new httpError("course is required", 400))
    }

    student.name = name;
    student.course = course;

    res.status(200).json({
        success: true,
        message: "student updated successfully",
        student
    })
})

app.delete("/deleteStudent/:id", (req, res, next) => {
    
    const id = Number(req.params.id);   

    const index = studentList.findIndex((s) => s.id === id);

    if (index === -1) {
        return next(new httpError("student not found", 404))
    }

    studentList.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "student deleted successfully"
    })
})

app.use((req, res, next) => {
    next(new httpError("requested route not found", 404))
})

app.use((error, req, res, next) => {

    if (res.headersSent) {
        return next(error)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "something went wrong"
    })
})

const port = 5000;
app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${port}`);

});

