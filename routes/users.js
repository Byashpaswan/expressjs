
 const mongoose=require('mongoose');
 mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");
  const userschema=mongoose.Schema({
    username:String,
    name:String,
    age:Number
  })

  // making collection by mongodb, we make model 
 module.exports= mongoose.model("user",userschema)