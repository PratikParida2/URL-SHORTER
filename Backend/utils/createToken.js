import jwt from "jsonwebtoken";
import dotenv from 'dotenv' 
const createToken=(res,email)=>
{
    const token=jwt.sign(email,process.env.JWT_SECREAT_KEY);
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
    
      return token;
}
export default createToken;