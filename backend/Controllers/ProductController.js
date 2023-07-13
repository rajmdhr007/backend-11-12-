const Product=require('../models/ProductModel')

exports.addproduct=async(req,res)=>{
    let product=new Product ({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        count_in_stock:req.body.count_in_stock,
        rating:req.body.rating,
        product_image:req.file.path,
        category:req.body.category



    })
    product=await product.save()
    if(!product){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(product)




}
exports.getproducts=async(req,res)=>{
let product=await Product.find()
if(!product){
    return res.status(400).json({error:"Product not found"})
}
res.send(product)

}

exports.getproductdetails=async(req,res)=>{
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(400).json({error:"Product Not found"})
    }
    res.send(product)
}
exports.updateproduct=async(req,res)=>{
    let product=await Product.findByIdAndUpdate(req.params.id,
        req.file?
        {
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        count_in_stock:req.body.count_in_stock,
        rating:req.body.rating,
        product_image:req.file.path,
        category:req.body.category

    }
    : {
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        count_in_stock:req.body.count_in_stock,
        rating:req.body.rating,
        category:req.body.category

    }
    
    ,{new:true})
    if(!product){
        return res.status(400).json({error:"Product not updated"})
    }
    res.send(product)

}

exports.deleteproduct=async(req,res)=>{
    let product=await Product.findByIdAndDelete(req.params.id)
    if(!product){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(product)
}

exports.getproductbycategory=async(req,res)=>{
    let product=await Product.find({category:req.params.id})
    if(!product){
        return res.status(400).json({error:"Something went wrong"})
    }
    // res.send(product)
    res.status(200).json({product})
}