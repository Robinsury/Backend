import mongoose from "mongoose";

const Schema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    iscompleted:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
 })

export const Task=mongoose.model("Task",Schema)