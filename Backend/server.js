import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectDB from './connectionDb.js';
import cors from 'cors';
import userRoute from './Routes/userRoute.js';
import urlRoute from './Routes/urlRoutes.js';
import Authentication from './middleware/Authentication.js';
dotenv.config()
const Port=process.env.Port;
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3500',
    credentials:true
}));
app.use('/users',userRoute);
app.use('/url',Authentication,urlRoute);
connectDB(); 
app.get('/',(req,res)=>{
    res.send('<h1>Url Shorter</h1>')
})
app.listen(Port,()=>console.log("Server Is Started In Port Number "+Port)
)