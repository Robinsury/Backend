import express  from "express";
// middle weare use kae ge isme
import userRouter from "./Router/users.js";
import taskRouters from "./Router/task.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddle } from "./middleweares/error.js";
import cors from "cors";

export  const app=express();

config({
    path:"./data/config.env",
});



// using middleweare
app.use(express.json())
app.use(cookieParser())

// deployment of domain
app.use(cors({
   origin:[process.env.FRONTEND_URL],
   methods:["GET","PUT","POST","DELETE"], 
//    cookies nahi jae ga agar nahi hoga tab
   credentials:true
}))
// using routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouters)


app.get("/",(req,res)=>{
    res.send("hii there")
})

// errpr le
app.use(errorMiddle)