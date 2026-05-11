import express from "express"
import httpError from "./middleware/httpError.js"

const app = express()

app.use(express.json())

const productList = [
    {
        id: 1,
        productName: "Laptop",
        price: 50000
    },
    {
        id: 2,
        productName: "Mobile",
        price: 20000
    }
]

app.get("/", (req, res) => {
    res.send("HELLO from server")
})


app.get("/productList", (req, res) => {

    if (productList.length === 0) {
        return res.status(200).json({
            message: "product not available"
        })
    }

    res.status(200).json({
        success: true,
        message: "product list found",
        productList
    })
})

app.get("/productList/:id", (req, res, next) => {

    const id = Number(req.params.id)

    const product = productList.find((p) => p.id === id)

    if (!product) {
        return next(new httpError("product not found with this id", 404))
    }

    res.status(200).json({
        success: true,
        message: "single product found",
        product
    })
})

app.post("/addProduct", (req, res, next) => {

    const { productName, price } = req.body

    if (!productName || !price) {
        return next(new httpError("productName and price are required", 400))
    }

    const newProduct = {
        id: new Date().getTime(),
        productName,
        price
    }

    productList.push(newProduct)

    res.status(201).json({
        success: true,
        message: "new product added successfully",
        newProduct
    })
})


app.patch("/updateProduct/:id", (req, res, next) => {

    const id = Number(req.params.id)

    const productData = productList.find((p) => p.id === id)

    if (!productData) {
        return next(new httpError("product not found for update", 404))
    }

    const { productName, price } = req.body

    if (!productName && !price) {
        return next(new httpError("productName or price is required", 400))
    }

    if (productName) {
        productData.productName = productName
    }

    if (price) {
        productData.price = price
    }

    res.status(200).json({
        success: true,
        message: "product updated successfully",
        productData
    })
})

app.delete("/deleteProduct/:id", (req, res, next) => {

    const id = Number(req.params.id)

    const index = productList.findIndex((p) => p.id === id)

    if (index === -1) {
        return next(new httpError("product not found", 404))
    }

    productList.splice(index, 1)

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
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

const port = 5000

app.listen(port, (err) => {

    if (err) {
        console.log(err.message)
    }

    console.log(`server is running on port ${port}`)
})