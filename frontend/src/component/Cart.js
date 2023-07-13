import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
        <div className="container-fluid text-center">
    <table className="table  table-bordered table-striped table-hover border-primary border-3 align-middle">
<tr>
    <td>S.no</td>
    <td>Product Name</td>
    <td>Product Image</td>
    <td>Quantity</td>
    <td>Price</td>
    <td>Total Price</td>
    <td>Action</td>
</tr>
<tr>
  <td>1</td>
  <td>Dell</td>
  <td><img src="https://media.istockphoto.com/photos/laptop-with-blank-screen-isolated-on-white-background-picture-id1128662796?b=1&k=20&m=1128662796&s=612x612&w=0&h=lRuomI_i4d746HCiIWypX4QXjHOMC3z7hm47nuf70jg=" alt="" height="120px" /></td>
  <td>3</td>
  <td>1,20,000</td>
  <td>3,60,000</td>
  <td>
    <Link  className="btn btn-primary" onClick={()=>{
      window.confirm('Are you sure you want to edit this product')
    }}><i className='bx bxs-edit'></i></Link>
    <Link href="" className="btn btn-danger"  onclick="return confirm('Are you sure you want to delete this product')"><i className='bx bx-trash' ></i></Link>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Dell</td>
  <td><img src="https://media.istockphoto.com/photos/laptop-with-blank-screen-isolated-on-white-background-picture-id1128662796?b=1&k=20&m=1128662796&s=612x612&w=0&h=lRuomI_i4d746HCiIWypX4QXjHOMC3z7hm47nuf70jg=" alt="" height="120px"/></td>
  <td>3</td>
  <td>1,20,000</td>
  <td>3,60,000</td>
  <td>
    <Link href="" className="btn btn-primary" onClick=" confirm('Are you sure you want to edit this product')">Update</Link>
    <button  className="btn btn-danger"  onClick= {()=>{
window.confirm('Are you sure you want to delete this product')
    }} ><i className='bx bx-trash' ></i></button>
  </td>
</tr>
<tr>
  <td>1</td>
  <td>Dell</td>
  <td><img src="https://media.istockphoto.com/photos/laptop-with-blank-screen-isolated-on-white-background-picture-id1128662796?b=1&k=20&m=1128662796&s=612x612&w=0&h=lRuomI_i4d746HCiIWypX4QXjHOMC3z7hm47nuf70jg=" alt="" height="120px" /></td>
  <td>3</td>
  <td>1,20,000</td>
  <td>3,60,000</td>
  <td>
    <Link href="" className="btn btn-primary" onclick="return confirm('Are you sure you want to edit this product')"><i className='bx bxs-edit'></i></Link>
    <Link href="" className="btn btn-danger"  onclick="return confirm('Are you sure you want to delete this product')"><i className='bx bx-trash' ></i></Link>
  </td>
</tr>


    </table>
</div>
    </div>
  )
}

export default Cart