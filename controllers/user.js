import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import { sendcookie } from "../utils/features.js";

// export const getallUsers=async(req,res)=>{
    
// }

export const Register=async (req,res)=>{
try {
    const {name,email,password}=req.body;

let user =await User.findOne({email});


if(user) return next(new ErrorHandler("user alredy exist",404))
const hashedpassword = await bcrypt.hash(password,10)

user = await User.create({name,email,password:hashedpassword})

sendcookie(user,res,"resgistered successfully",201)

} catch (error) {
    next(error)
    }    
}


export const login=async(req,res,next)=>{
       
    try {
        const {email,password} =req.body;

    const user = await User.findOne({email}).select("+password");
    if(!user) return next(new ErrorHandler("invalid email or password",404))

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch)
    return res.status(404).json({
        success:false,
        message:"invalid email password"
    });

    // agar pass ho jata hai

    sendcookie(user,res,`welcom back, ${user.name}`,200)
    } catch (error) {
     next(error)
    }
    
}


export const getmyProfile= (req,res)=>{
res.status(200).json({
    success:true,
    user:req.user,
})
}
// console.log();
export const logout = (req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="Devlopment"?"lax":"none",
    // sameSite:"none",
    secure:process.env.NODE_ENV==="Devlopment"?false:true,
    })
    .json({
        success:true,
        user:req.user,
    })
    }
