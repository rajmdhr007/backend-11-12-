const Category=require('../models/CategoryModel')

exports.addCategory=async(req,res)=>{
    let category=await Category.findOne({
        category_name:req.body.category_name

    })
    if(category){
        return res.status(400).json({error:"Category already exists"})
    }
    let categorytoadd= new Category({
        category_name:req.body.category_name
    })
    categorytoadd=await categorytoadd.save()
    if(!categorytoadd){
        return res.status(400).json({error:"Category not added"})
    }
    res.send(categorytoadd)

    
    

}
exports.findAllCategory=async(req,res)=>{
    let category=await Category.find()
    if(!category){
     return  res.status(400).json({error:"Category Not found"})
    }
    res.send(category)

}
exports.getCategoryDetail=async(req,res)=>{
    let category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({error:"Category doesnot exist or id invalid"})
    }
    res.send(category)
}

exports.updatecategory=async(req,res)=>{
    let category=await Category.findByIdAndUpdate(req.params.id,{
        category_name:req.body.category_name
    },{new:true})

    if(!category){
       return res.status(400).json({error:"something went wrong"})
    }
    res.send(category)
}
exports.deletecategory=async(req,res)=>{
    let category=await Category.findByIdAndDelete(req.params.id)
    if(!category){
        return res.status(400).json({error:"Category not found"})
    }
    res.send({message:"Category Deleted"})
}
// req.body=>data is send using user form
// req.params=>data is used from the url
// req.query

// find()=>returns all data from the database
// findOne()=>returns first doc that matches the given user feild
// findByIdAndUpdate()=>finds the given doc using id and updates it
// findByIdAndDelete()=>finds the given doc using id and delete it
// findById()=>finds the doc using given id




