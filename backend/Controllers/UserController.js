const User=require("../models/UserModel")
let crypto=require("crypto")
const Token=require("../models/TokenModel")
const sendEmail=require("../utils/sendEmail")
const jwt=require("jsonwebtoken")
const {expressjwt}=require("express-jwt")

exports.register=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:"Email already exist"})
    }
    let newuser=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
     newuser=await newuser.save()
     if(!newuser){
        return res.status(400).json({error:"Something went wrong"})
     }
     let token=new Token({
        token:crypto.randomBytes(16).toString('hex'),
        user:newuser._id
        
     })
     token=await token.save()
     if(!token){
        return res.status(400).json({error:"Something went wrong"})
     }
     const url=`http://localhost:3000/verifyemail/${token.token}`
     sendEmail({
      from:"noreply@gmail.com",
      to:newuser.email,
      text:`Click on the following link to verify ${url}`,
      html:`<a href=${url} >Click to verify</a>`

     })



     res.send(newuser)


}
exports.verifyemail=async(req,res)=>{
   let token =await Token.findOne({token:req.params.token})
   if(!token){
      return res.status(400).json({error:"Something went wrong123"})
   }
   // check user
   let user=await User.findById(token.user)
   if(!user){
      return res.status(400).json({error:"User Not Found"})
   }
   if(user.isVerified){
      return res.status(400).json({error:"User already verified"})
   }
   user.isVerified=true
   user=await user.save()
   if(!user){
      return res.status(400).json({error:"Something went wrong"})
   }
   res.status(200).json({message:"User Verified"})
}
exports.resendverification=async(req,res)=>{
let user=await User.findOne({email:req.body.email})
if(!user){
   return res.send(400).json({error:"Email not found"})
}
if(user.isVerified){
   return res.status(400).json({error:"User is already verified"})
}

let token =new Token({
   token:crypto.randomBytes(16).toString("hex"),
   user:user._id
})
token=await token.save()
if(!token){
   return res.status(400).json({error:"Something went wrong"})
}
const url=`localhost:5000/verifyemail/${token.token}`
sendEmail({
 from:"noreply@gmail.com",
 to:user.email,
 text:`Click on the following link to verify ${url}`,
 html:`<a href=${url} >Click to verify</a>`

})
res.send({message:`Token Send please check you email ${user.email}`})


}
exports.forgetpassword=async(req,res)=>{
   let user =await User.findOne({email:req.body.email})
   if(!user){
      return res.status(400).json({error:"Email not found"})
   }
   let token =new Token({
      token:crypto.randomBytes(16).toString("hex"),
      user:user._id
   })
   token=await token.save()
   if(!token){
      return res.status(400).json({error:"Something went wrong"})
   }
   const url=`localhost:3000/resetpassword/${token.token}`
   sendEmail({
    from:"noreply@gmail.com",
    to:user.email,
    text:`Click on the following link to verify ${url}`,
    html:`<a href=${url} >Click to verify</a>`
   
   })
   res.send({message:`Reset code Send please check you email ${user.email}`})


}
exports.resetverify=async(req,res)=>{
   let token=await Token.findOne({token:req.params.token})
   if(!token){
      return res.status(400).json({error:"Token not found"})
   }
   let user=await User.findById(token.user)
   if(!user){
      return res.status(400).json({error:"User not found"})
   }
   user.password=req.body.password
   user=await user.save()
   if(!user){
      return res.status(400).json({error:"Something went wrong"})
   }
   res.status(200).json({message:"Password Updated Successfully"})
}
exports.getUserList=async(req,res)=>{
   let user=await User.find()
   if(!user){
      return res.status(400).json({error:"Something went wrong"})
   }
   res.send(user)
}
exports.getUserDetails=async(req,res)=>{
   let user=await User.findById(req.params.id)
   if(!user){
      return res.status(400).json({error:"Something went wrong"})
   }
   res.send(user)
   
}
exports.updateuser=async(req,res)=>{
   let user=await User.findByIdAndUpdate(req.params.id,{
      username:req.body.username,
      email:req.body.email,
      role:req.body.role,
      isVerified:req.body.isVerified
   },{new:true})
   if(!user){
      return res.status(400).json({error:"Something went wrong"})
   }
   res.send(user)
}
exports.deleteuser=async(req,res)=>{
   let user=await User.findByIdAndDelete(req.params.id)
   if(!user){
      return res.status(400).json({error:"Something went wrong"})
   }
   res.send({message:"User Deleted Successfully"})

}
exports.signin=async(req,res)=>{
   // destructure
   let{email,password}=req.body
   let user=await User.findOne({email:email})
   if(!user){
      return res.status(400).json({error:"Email Not found"})
   }
   if(!user.authenticate(password)){
      return res.status(400).json({error:"Password Incorrect"})
   }
   if(!user.isVerified){
      return res.status(400).json({error:"User is not verified"})

   }
   let{_id,username,role}=user

   let token = jwt.sign({ user:_id,role:role }, process.env.JWT_PASS);

   return res.send({
      token:token,
      username:username,
      role:role,
      email:email



   })




   
}
exports.signout=async(req,res)=>{
   res.send("Signed out successfully")
}

exports.requireSignin=expressjwt({
   secret:process.env.JWT_PASS,
   algorithms:["HS256"]
})

