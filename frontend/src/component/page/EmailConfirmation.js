import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { verifyemail } from '../../api/userApi'

const EmailConfirmation = () => {
    const[success,setSuccess]=useState('')
    const[error,setError]=useState('')
    let token=useParams()
    useEffect(()=>{
        console.log(token)
        verifyemail(token)
        .then(data=>{
            console.log(data)
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else if(data.message){
                setSuccess(data.message)
                setError(false)
            }


        })


    },[])
    const showError=()=>{
        if(setError){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess=()=>{
        if(setSuccess){
            return <div className='alert alert-success'>{success}</div>


        }
    }
  return (
    <div>
        {
           success?showSuccess(): showError()
        }
        <Link to="/signin">Please Click to go to Signin</Link>
       

    </div>
  )
}

export default EmailConfirmation