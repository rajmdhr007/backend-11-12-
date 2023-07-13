import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className="container-fluid bg-warning custom-navbar ">
<div className="row align-items-center">
<div className="col-3 ">
    <Link className="navbar-brand fs-2 fw-bold text-muted" to="/">Ecommerce</Link>

</div>
<div className="col-7 "> <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-success" type="submit">Search</button>
  </form></div>
<div className="col-2 d-flex justify-content-evenly ">
<Link to="/signin"><i className="bi bi-box-arrow-in-right fs-2"></i></Link>
<Link to="/register.html" className=""><i className="bi bi-box-arrow-in-down fs-2 "></i></Link>
<Link to="/cart.html"><i className="bi bi-cart fs-2"></i></Link>


</div>
</div>
</div>

<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/nav">Home</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services.html">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">About us</Link>
          </li>
         
        </ul>
       
      </div>
    </div>
  </nav>
    
    
    
    
    
    </>
  )
}

export default Navbar