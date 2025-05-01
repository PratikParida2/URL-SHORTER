import urlModel from "../Model/urlModels.js";
import shortid from "shortid";
const generateUrl=async(req,res)=>
{
    const short=shortid.generate();
    const originalUrl=req.body.url;
    if(!originalUrl)
        res.status(401).json({message:"Required Original Url"})
    const newUrl=await urlModel.create({
        shortId:short,
        orginalUrl:originalUrl
    })
    res.status(201).json(newUrl);
}
const getUrl=async(req,res)=>
{
    const shortId=req.params.shortId;
    const originalUrl=await urlModel.find({shortId:shortId});
    if(originalUrl.length===0)
    {
        console.log(originalUrl);
        res.json({message:"Please Recheck Url"});
    }
    else
    {
        
        
        res.redirect(originalUrl[0].orginalUrl);
    }
}
export  {generateUrl,getUrl};  