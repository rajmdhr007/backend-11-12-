import React, { useState } from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import { forgetpassword } from '../../api/userApi'

const ForgetPassword = () => {
    const [email,setEmail]=useState('')
    const [error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        forgetpassword(email)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else if(data.message){
                setSuccess(data.message)
                setError('')
            }
        })
    }
    const showError=()=>{
        if(error){
        return <div className='alert alert-danger'>{error} </div>
    }
    }
    const showSuccess=()=>{
        if(success){
        return <div className='alert alert-primary'>{success} </div>
    }
    }

  return (
    <>
    {
        success?showSuccess():showError()
    }
    <Navbar/>
    <div className="container w-25 border border-1  p-4 m-auto mt-3">
        <h1>Forget Password</h1>
        <p>Please enter your email to change your pw</p>
        <input type="text" name="" id="" className='form-control' placeholder='Enter your email' onChange={e=>setEmail(e.target.value)}  />
        <button className='btn btn-primary mt-3' onClick={handleSubmit}> Submit</button>
    </div>
    <Footer/>

    </>
  )
}

export default ForgetPassword