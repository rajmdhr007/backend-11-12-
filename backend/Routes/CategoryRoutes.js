const express=require("express")
const { addCategory, findAllCategory, getCategoryDetail, updatecategory, deletecategory } = require("../Controllers/CategoryController")
const router=express.Router()


router.post("/addcategory",addCategory)
router.get("/getcategory",findAllCategory)
router.get("/getcategorydetail/:id",getCategoryDetail)
router.put("/updatecategory/:id",updatecategory)
router.delete("/deletecategory/:id",deletecategory)

module.exports=router
