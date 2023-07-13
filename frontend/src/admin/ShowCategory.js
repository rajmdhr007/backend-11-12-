import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { categoryDelete, showcategory } from '../api/categoryApi'
import  Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const ShowCategory = () => {
  const[categories,setCategories]=useState([])


useEffect(()=>{
showcategory()
.then(data=>setCategories(data))


},[])
const handleDelete=(token)=>e=>{
  e.preventDefault()
  // swal("deleted","deleted","success")
  swal("Do you want to delete category", {
    buttons: {
      
      delete: {
        text: "delete",
        value: "delete",
      },
      no:{
        text:"no",
        value:"no"
        
      },
    },
  })
  .then((value) => {
    switch (value) {
   
      case "delete":
        swal("deleted","category deleted","success");
      categoryDelete(token)
      window.location.reload()
        break;
   
      case "no":
        swal("sorry", "category not deleted", "error");
        break;
   
      default:
        swal("Got away safely!");
    }
  });

}



  return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <AdminSidebar category/>
            </div>
            <div className="col-md-9 mt-5" >
                <h1>Categories</h1>
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                  categories &&categories.map((c,i)=>{
                    return <tr>
                     <td key={i}>{c.category_name}</td>
                     <td>
                    <Link to={`/admin/updatecategory/${c._id}`}><div className='btn btn-primary' >Update</div></Link> 
                      <div className='btn btn-danger' onClick={handleDelete(c._id)}>Delete</div>

                     </td>


                    </tr>
                  })
                }

                  </tbody>
               


                </table>

               <Link to="/admin/addcategory"><h3>Add Category</h3></Link> 



               
            </div>

        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default ShowCategory