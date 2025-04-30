import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const Authentication=(req,res,next)=>
{
    const token=req.cookies.jwt;
    
    if(token)
    {
        try {
            const verifyToken=jwt.verify(token,process.env.JWT_SECREAT_KEY);
            if(verifyToken)
            {   
                next();
            }
            else
            {
                res.status(401).json({message:"Unauthorized"});
            }

        } 
        catch (error) {
            res.status(401).json({message:"Unauthorized"});
        }
        
        
    }
    else
    {
        res.status(401).json({message:"Unauthorized"});
    }
}
export default Authentication;