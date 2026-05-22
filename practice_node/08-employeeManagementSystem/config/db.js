
import mongoose from "mongoose";

async function connectDB() {
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/employee")

        console.log("DB connected")

        return connect

    } catch (error) {
        throw new Error(error);
    }
    
}
export default connectDB;
