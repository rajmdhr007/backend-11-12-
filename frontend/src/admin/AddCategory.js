import React, { useState } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import { addcategory } from '../api/categoryApi'

const AddCategory = () => {
    const[category,setCategory]=useState("")
    const [error,setError]=useState("")
    const[success,setSuccess]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        addcategory(category)
        .then(data=>
            {
                if(data.error){
                    setError(data.error)
                    setSuccess(false)
                }
                else{
                    setSuccess(true)
                    setError(false)
    
                }
                
                
                
                
            }
        )
          

    }

    const showerror=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showsuccess=()=>{
        if(success){
            return <div className='alert alert-primary'>Category Added</div>
            
            
        }
    }
  return (
    <>
     {
        success?showsuccess() :showerror()
    } 
      <Navbar/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <AdminSidebar category/>
            </div>
            <div className="col-md-9 mt-5" >
                <h1>Add Category</h1>
               

            <input type="text" placeholder='Enter Category' className='form-control w-25'
            onChange={e=>setCategory(e.target.value)}/>
            <div className='btn btn-primary mt-4 ' onClick={handleSubmit} >Add Category</div>


               
            </div>

        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default AddCategory