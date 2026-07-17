// external module
import express from "express";
import dotenv from "dotenv"
dotenv.config({path :"./.env"})

// local modules
import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import router from "./router/UserRouter.js";

const app = express();

app.use(express.json());

app.use("/user", router);

// server check
app.get("/", (req, res) => {
    res.json({ message: "hello from server" });
});

app.use((req, res, next) => {
    return next(new HttpError("requested route not found", 404));
});


// centralize error
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }

    res
        .status(error.statusCode || 500)
        .json({ message: error.message || "internal server error " });
});

const port = 5000

async function serverStart() {
  try {
    const connect = await connectDB();

    if (!connect) {
      return console.log("failed to connect db");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

serverStart();