import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import AdminSidebar from './AdminSidebar'
import { getcategorydetail, updatecategory } from '../api/categoryApi'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert';

const UpdateCategory = () => {
    const params=useParams()
    const[category,setCategory]=useState("")
    const [error,setError]=useState("")
    const[success,setSuccess]=useState(false)
    useEffect(()=>{

        getcategorydetail(params.token)
        .then(data=>{
            setCategory(data.category_name)
        })
    },[])


    const handleSubmit=(e)=>{
        e.preventDefault()
        updatecategory(category,params.token)
        .then(
            data=>{
                if(data.error){
                    setError(data.error)
                    setSuccess(false)
        swal("error",`${error}`,"error")

                }
                else{
                    setSuccess(true)
                    setError(false)
        swal("success",`updated successfully`,"success")

                }
            }
        )



    }

    // const showerror=()=>{
    //     if(error){
    //         return <div className='alert alert-danger' >{error}</div>
            
    //     }
    // }
    // const showsuccess=()=>{
    //     if(success){
    //         return <div className='alert alert-primary' >Category Updated successfully</div>
    //     }

    // }


  return (
    <>
     <Navbar/>
     {/* {
        success? showsuccess() :showerror()
     } */}
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <AdminSidebar category/>
            </div>
            <div className="col-md-9 mt-5" >
                <h1>Update Category</h1>
               

            <input type="text" value={category} placeholder='Enter Category' className='form-control w-25'
            onChange={e=>setCategory(e.target.value)}/>
            <div className='btn btn-primary mt-4 ' onClick={handleSubmit} >update Category</div>


               
            </div>

        </div>
    </div>
    <Footer/>
    
    
    
    
    </>
  )
}

export default UpdateCategory