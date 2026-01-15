import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI){
    throw new Error("Database URI is not defined");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Failed to connect to the database", error);
        throw error;
    }
}

export default connectToDatabase;