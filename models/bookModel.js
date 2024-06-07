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
    }
});

const bookCollection= mongoose.model("book", bookSchema);
module.exports= bookCollection;