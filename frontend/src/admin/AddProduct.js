import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { showcategory } from '../api/categoryApi'
import { addproduct } from '../api/productApi'

const AddProduct = () => {
const [categories,setCategories]=useState([])
const [product,setProduct]=useState({
  product_name:"",
  product_price:"",
  product_description:"",
  count_in_stock:"",
  product_image:"",
  rating:"",
  category:"",
  error:"",
  success:"",
  formdata:""
 
})
const{product_name,product_price,product_description,count_in_stock,product_image,rating,category,error,success,formdata}=product

useEffect(()=>{
  showcategory()
  .then(data=>{
    setCategories(data)

  })
  setProduct({...product,formdata:new FormData})
},[])
const handleSubmit=(e)=>{
  e.preventDefault()
  addproduct(formdata)
  .then(data=>{
    console.log(data)
    // if(data.error){
    //   setProduct({...product,error:data.error,success:false})
    // }
    // else{
    //   console.log(data)
    //   setProduct({success:true,})
    // }
  })



}
const handleChange=(key)=>(e)=>{
  let value
  if(key==="product_image"){
    value=e.target.files[0]
  }
  else{
    value=e.target.value
  }
  setProduct({...product,[key]:value})
  formdata.set(key,value)
  console.log(formdata)

}
// const showerror=()=>{
//   if(error){
//     return <div className='alert alert-danger'>{error}</div>
//   }
// }
// const showSuccess=()=>{
//   if(success){
//     return <div className='alert alert-success'>Product Added</div>
//   }
// }

  return (
    <>
    {/* {
      success?showSuccess():showerror()
    } */}
   
    <div className="container-fluid ">

    <div className="row">
        <div className="col-md-4 ">
          <AdminSidebar home/>
        </div>
        <div className="col-md-8">
            <h1>Add Product</h1>
            <form action="" className='w-50 p-3 border'>
                <label htmlFor="product_name">Product Name</label>
                <input type="text" name="" className='form-control' id="product_name" onChange={handleChange('product_name')} value={product_name} />
                <label htmlFor="product_price">Product Price</label>
                <input type="text" name="" className='form-control' id="product_price"
                onChange={handleChange('product_price')} value={product_price} />
                <label htmlFor="product_desc">Product Description</label>
                <input type="text" name="" className='form-control' id="product_desc" 
                onChange={handleChange('product_description')} value={product_description}
                />
                <label htmlFor="count">count_in_stock</label>
                <input type="text" name="" className='form-control' id="count"
                onChange={handleChange('count_in_stock')} value={count_in_stock}
                />
                <label htmlFor="product_rating">Product Rating</label>
                <input type="text" name="" className='form-control' id="product_rating"
                onChange={handleChange('rating')} value={rating}
                />
                <label htmlFor="product_image">Product Image</label>
                <input type="file" name="" id="product_image" className='form-control'
                onChange={handleChange('product_image')}  />
                <label htmlFor="cat">Category</label>
                <select name="category" id="cat" onChange={handleChange('category')}>
                {
                  categories.map((c,i)=>{
                   return <option className='form-control w-50' value={c._id} key={i}>{c.category_name}</option>
                  })
                }

                </select>
                <button className='btn btn-primary' onClick={handleSubmit}>Add Product</button>
            </form>
        </div>
    </div>
</div>
</>
  
  )
}

export default AddProduct