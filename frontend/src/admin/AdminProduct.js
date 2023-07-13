import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { deleteproduct, getproduct } from '../api/productApi'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'

const AdminProduct = () => {
    const [data,setData]=useState([])
    const [error,setError]=useState("")
    
    const [success,setSuccess]=useState(false)


    useEffect(()=>{
        getproduct()
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)

            }
            else{
                setError(false)
                setSuccess(true)
                setData(data)
            }
        })


    },[])

    const handleDelete=(token)=>e=>{
        e.preventDefault()
        // swal("deleted","deleted","success")
        swal("Do you want to delete this product", {
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
              swal("deleted","product deleted","success");
            deleteproduct(token)
            window.location.reload()
              break;
         
            case "no":
              swal("sorry", "product not deleted", "error");
              break;
         
            default:
              swal("Not deleted!");
          }
        });
      
      }


  return (
    <>
    <Navbar/>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-md-3">
              <AdminSidebar products />
            </div>
            <div className="col-md-9">
                <h1>Products</h1>

                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Product Price</th>
                            <th>Product Rating</th>
                           
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    {
                data.map((product,i)=>{
                    return <tr>
                        <th>{i+1}</th>

                        <th>
                        
                            <img src={`http://localhost:5000/${product.product_image}` }alt={product.product_image}  height={200}/></th>
                        <th>{product.product_name}</th>
                        <th>{product.count_in_stock}</th>
                        <th>Nrs.{product.product_price}</th>

                        <th>{product.rating}</th>
                        
                        <th>
                            <button class="btn btn-primary">Update</button>
                            <button class="btn btn-danger" onClick={handleDelete(product._id)} >Delete</button>

                        </th>

                    </tr>
                 



                })
               }
             


                    </tbody>

               
              
                </table>
    <Link to="/admin/addproduct"><h3>Add Product</h3></Link>



            </div>
        </div>
    </div>
    <Footer/>

    </>
  )
}

export default AdminProduct