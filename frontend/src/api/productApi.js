export const getproduct=()=>{
    return fetch(`http://localhost:5000/product/getproduct`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const deleteproduct=(token)=>{
    return fetch(`http://localhost:5000/product/deleteproduct/${token}`,{
        method:"DELETE",
           headers:{
              "Content-Type":"application/json"
           }
        
     })
     .then(res=>res.json())
     .catch(err=>console.log(err))

}
export const addproduct=(formdata)=>{
    

    return fetch(`http://localhost:5000/product/addproduct`,{
       method:"POST",
       headers:{
        //   "Content-Type":"application/json"
       },
       body:formdata
    
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
    
}