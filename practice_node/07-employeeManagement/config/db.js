
import mongoose from "mongoose";

async function connectDB() {

    try {
        const connect = await mongoose.connect("mongodb+srv://ankitshiyal2005_db_user:oAhoel7aHiTHiMSe@cluster0.in3xp8p.mongodb.net/?appName=Cluster0")
        console.log("db connected")

        return connect;

    } catch (error) {
        throw new Error(error)
    }
}

export default connectDB;