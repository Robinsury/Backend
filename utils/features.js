import Jwt from "jsonwebtoken"

export const sendcookie=(user,res,message,statuscode=200)=>{

    const token = Jwt.sign({_id:user._id},process.env.Jwt_SECRET)
res.status(statuscode).cookie("token",token,{
    httpOnly:true,
    maxAge:15*60*1000,

    // front end or backend cookie same honi chaheya
    sameSite:process.env.NODE_ENV==="Devlopment"?"lax":"none",
    // sameSite:"none",
    secure:process.env.NODE_ENV==="Devlopment"?false:true,

}).json({
    success:true,
    message,
})


}