import React, { useState } from 'react'
import { resetpwverify } from '../../api/userApi'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ResetPassword = () => {
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')
  const[success,setSuccess]=useState('')

  const token=useParams()

  const handleSubmit=(e)=>{
    e.preventDefault()
    resetpwverify(token,password)
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
      return <div className='alert alert-danger'>{error}</div>
    }
  }
const showSuccess=()=>{
  if(success){
    return <div className='alert alert-primary'>{success}</div>


  }
}
  return (
    <>
    {
      showError()
    }
    {showSuccess()
    }
    <Navbar/>
    <div className="container w-25 border border-1  p-4 m-auto mt-3">
        <h1>Forget Password</h1>
        <p>Email has been verified please enter your new password</p>
        <input type="password" name="" id="" className='form-control' placeholder='Enter your new password' onChange={e=>setPassword(e.target.value)}  />
        <button className='btn btn-primary mt-3' onClick={handleSubmit}> Submit</button>
    </div>
    <Footer/>

        
    </>
  )
}

export default ResetPassword