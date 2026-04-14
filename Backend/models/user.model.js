import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    lastName:{
        type: String,
        required : trusted,

    },
    email:{
        type: String,
        required :true,
        unique : true
    },
    password:{
        type: String,
        required : true
    },
    bio:{
        type: String,
        default : ""
    },
    occupation:{
        type: String,
        default : ""
    },
    photo:{
        type: String,
        default : ""
    },
    instagram:{
        type: String,
        default : ""
    },
     facebook:{
        type: String,
        default : ""
    },
     linkedIn:{
        type: String,
        default : ""
    },
     github:{
        type: String,
        default : ""
    },
},{timestamps : true})

const User = mongoose.model("User", userSchema)