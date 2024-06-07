const mongoose = require("mongoose");
const bookSchema =new mongoose.Schema({
    Poster:String,
    Name: String,
    Author:String,
    Isbn:String,
    Price:Number,
    description:String,
    Name:{
        type:String,
        required:[true,"book name is required"],
        minLength:[5, "letter 5"],
        trim:true,
    },
    Price: {
        type:Number,
        default:0,
        maxLength:9,
    },

    description:{
        type:String,
        required:[true,"description is required"],
        minLength:[10],
        trim:true,
     
    },
    Isbn:{
        type:String,
        unique:true,
        maxLength:13,
        minLength:13,
        trim:true,
        uppercase:true,
    },
    Author:{
        type:String,
        required:[true,"description is required"],
        minLength:4,
        trim:true,
    }
});

const bookCollection= mongoose.model("book", bookSchema);
module.exports= bookCollection;