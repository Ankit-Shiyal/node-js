import express from "express"
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

let studentList = [
  {
    id: 1,
    name: "Ankit"
  },
  {
    id: 2,
    name: "Dharmik"
  },
  {
    id: 3,
    name: "Amit"
  }
]

app.get("/", (req, res) => {
  res.render("index", { studentList })
})

app.get("/add", (req, res) => {
  res.render("add")
})

app.post("/add", (req, res) => {
  const { name } = req.body

  const newStudent = {
    id: new Date().getTime(),
    name,
  }

  studentList.push(newStudent);

  res.redirect("/")
})

app.get("/edit/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = studentList.find((s) => s.id === id);

  if (!student) {
    return res.send("Student not found ");
  }

  res.render("edit", { student });
});

app.post("/update/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  const student = studentList.find((s) => s.id === id);

  if (student) {
    student.name = name;
  }

  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const id = Number(req.params.id);
  studentList = studentList.filter((s) => s.id !== id);

  res.redirect("/");
});

const port = 5000

app.listen(port, (err) => {

  if (err) {
    console.log(err.message)
  }
  console.log("server is running")
})
