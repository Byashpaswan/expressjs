var express = require('express');
var router = express.Router();

const userModel=require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.send("index")
});

router.get('/create',async function(req,res){
  const createduser=  await userModel.create({
    username:"byas",
    age:22,
    name:"Byas"
   });
   res.send(createduser);
});

/////////////////////////////////////////////////////////
 router.get('/findall',async function(req,res){
   const findAll=await userModel.find();
    res.send(findAll);
 })


 router.get('/findone',async function(req,res){
    const findone=await userModel.findOne({username:"byas"});
     res.send(findone);
 })


 router.get('/delete',async function(req,res){
   const Deleteduser= await userModel.findOneAndDelete({username:"byas"});
    res.send(Deleteduser);
 })

module.exports = router;
