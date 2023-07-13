import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userRegister } from '../api/userApi'
import Navbar from "./Navbar"

const Register = () => {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState('')
    const[success,setSuccess]=useState(false)
    const handleSubmit=(e)=>{
      e.preventDefault()
      userRegister(username,email,password)
      .then(data=>{
        console.log(data)
       if(data.error){
        setError(data.error)
        setSuccess(false)
       }
       else{
        setSuccess(true)
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
       return <div className='alert alert-primary'>Email Verification has been sent to your mail</div>

      }
    }
  return (
    <>
    <Navbar/>
    <div>
    {
        showError()
      }
      {
        showSuccess()
      }
      </div>
    
   
     <div className="container-fluid text-center">
    <main className="form-signin w-25 my-5 m-auto border border-3 border-primary p-3 rounded-4">
        <form>
       
          <img className="mb-4 rounded-circle " src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" width="72" height="60"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating ">
            <input type="username" className="form-control" id="username" placeholder="name@example.com" onChange={e=>setUsername(e.target.value)} />
            <label for="useraname">Username</label>
          </div>
      
          <div className="form-floating ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)} />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
          </div>
      
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
          Don't have an account?Please <Link to="register.html">Register</Link>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
</div>
    
    </>
  )
}

export default Register