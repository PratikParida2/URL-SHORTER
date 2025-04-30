import mongoose from "mongoose";
const url=mongoose.Schema({
    shortId:{
        type:String,
        required:true
    },
    orginalUrl:{
        type:String,
        required:true
    }
})
const urlModel=mongoose.model('url',url);
export default urlModel;