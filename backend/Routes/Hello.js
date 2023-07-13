const express=require("express")
const { hellofunction } = require("../Controllers/HelloController")
const router=express.Router()

router.get("/hello1",hellofunction)
// .get("/hello",(req,res)=>{
    //     res.send("Hello guys we are learning css")
module.exports=router