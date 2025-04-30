import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const connectDB=async()=>
{
    mongoose.connect(process.env.connection_url).then(console.log("Database Connected Succesfully")
    );
}
export default connectDB;