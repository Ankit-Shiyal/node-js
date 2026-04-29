

// file system

const fs = require("fs")

fs.writeFileSync("new.txt", "hello")

const data = fs.readFileSync("new.txt", "utf-8")
console.log("data", data)