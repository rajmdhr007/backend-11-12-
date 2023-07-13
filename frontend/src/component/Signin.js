import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../api/userApi'

const Signin = () => {
  const navigate=useNavigate()
  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')
  const[success,setSuccess]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    signin(email,password)
    .then(data=>{
      console.log(data)
      if(data.error){
        setError(data.error)
        setSuccess('')
      }
      else{
        setSuccess(true)
        authenticate(data)
      }
      
    }
      
      
      )
  }
const redirect=()=>{
  if(success){
    if(isAuthenticated().role==0){
      navigate("/")
    }
    else{
      navigate("/admin/dashboard")
    }
  }
}
const showError=()=>{
  if(error){
   return <div className='alert alert-danger'>{error}</div>
  }
}

return (
    <>
    {
      showError()
      
    }
    {
      redirect()
    }
   
    <div className="container-fluid text-center">
    <main className="form-signin w-25 my-5 m-auto border border-3 border-primary p-3 rounded-4">
        <form>
          <img className="mb-4 rounded-circle " src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" width="72" height="60"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div className="form-floating ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
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
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
          Don't have an account?Please <Link to="register.html">Register</Link>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
</div>
    </>
  )
}

export default Signin