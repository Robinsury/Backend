import mongoose from "mongoose";

const Schema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
        unique:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
 })

export const User=mongoose.model("user",Schema)