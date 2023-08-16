// error ke ander bhi class bana sakte hai
class ErrorHandler extends Error{
    constructor(message,statusCode){
// parent class
        super(message);
        this.statusCode=statusCode;
    }

}
// 
export const errorMiddle=(err,req,res,next)=>{
    err.message=err.message || "internam server error";
    err.statusCode=err.statusCode || 500;

    return res.status(err.statusCode).json({
         success:false,
         message:err.message
   });
 };

 export default ErrorHandler;