import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
    try{
        const {MONGO_URI} = ENV;
        if(!MONGO_URI)
            throw new Error("MONGO_URI is not set!");

        const conn = await mongoose.connect(MONGO_URI);
        console.log("MONGO DB connected!!",conn.connection.host);
    }
    catch(error){
        console.error("Error connecting to mongoDB",error);
        process.exit(1); // 1 for fail, 0 means success
    }
}