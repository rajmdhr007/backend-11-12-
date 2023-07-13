const express=require("express")
const { register, verifyemail, resendverification, forgetpassword, resetverify, getUserList, getUserDetails, updateuser, deleteuser, signin } = require("../Controllers/UserController")
const router=express.Router()

router.post("/register",register),
router.get("/verifyemail/:token",verifyemail)
router.post("/resendverification",resendverification)
router.post("/resetpassword",forgetpassword)
router.post("/resetpassword/:token",resetverify)
router.get("/getusers/",getUserList)
router.get("/getuserdetail/:id",getUserDetails)
router.put("/updateuser/:id",updateuser)
router.delete("/deleteuser/:id",deleteuser)
router.post("/signin",signin)



module.exports=router
