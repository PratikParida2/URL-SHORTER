import express from 'express'
const userRoute=express.Router();
import { loginUser,registerUser } from '../Controller/userController.js';
userRoute.post('/login',loginUser);
userRoute.post('/register',registerUser);
export default userRoute;