const express=require('express')
const { addproduct, getproducts, getproductdetails, updateproduct, deleteproduct, getproductbycategory } = require('../Controllers/ProductController')
const upload = require('../utils/fileUpload')
const router=express.Router()

router.post("/addproduct",upload.single('product_image'),addproduct)
router.get("/getproduct",getproducts)
router.get("/getproductdetails/:id",getproductdetails)
router.put("/updateproduct/:id",updateproduct)
router.delete("/deleteproduct/:id",deleteproduct)
router.get("/getproductbycategory/:id",getproductbycategory)
module.exports=router