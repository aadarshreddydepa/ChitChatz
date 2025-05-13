import mongoose from "mongoose";
import mogoose from "mongoose";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB connection establised at : ${conn.connection.host}`);
    } catch (error) {
        process.exit(1);
    }
}
