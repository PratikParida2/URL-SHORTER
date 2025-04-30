import userModel from "../Model/userModel.js";
import bcrypt from 'bcryptjs'
import validator from 'validator'
import createToken from "../utils/createToken.js";
const loginUser=async(req,res)=>
{
    try {
        const {email,password}=req.body;
        const existingUser=await userModel.findOne({email});
        if(existingUser)
        {
            const isPassword=await bcrypt.compare(password,existingUser.password);
            if(isPassword)
            {
                const token=createToken(res,email);
                res.status(200).send("Login Succesfully")
            }
            else
            {
                res.status(401).send("Wrong Password");
            }

        }
        else
        {
            res.status(401).send("Please First Register");
        }

    } catch (error) {
        res.send(error);
    }
}
const registerUser=async(req,res)=>
{
    try {
        const {name,email,password}=req.body;
        if(!name || !email ||!password )
        {
            return res.status(404).json({message:"Please Fill All The Inputs Yar"});
        }
        const userMail=await userModel.findOne({email});
        if(userMail)
        {
            return res.status(401).json({message:"This Mail Id Already Registered"});
        }
        if(!validator.isEmail(email))
        {
            return  res.status(401).json({message:"Please Enter A Valid Email"});
        }
         if(password.length<8)
        {   
            return  res.status(401).json({message:"Please Enter A Strong Password"});
        }
        else
        {
            const salt=await bcrypt.genSalt(10);
            const hashPassword=await bcrypt.hash(password,salt);
            const newUser=new userModel({name,email,password:hashPassword});
            await newUser.save();
            return  res.status(201).json({message:"User Created Successfully"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
    
}
export {loginUser,registerUser};