import mongoose from "mongoose";
const user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
})
const userModel=mongoose.model('userModel',user);
export default userModel;