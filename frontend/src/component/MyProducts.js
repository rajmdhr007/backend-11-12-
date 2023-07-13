import React from 'react'
import { Link } from 'react-router-dom'

const MyProducts = () => {
  return (
    <>
    <div className="container-fluid">
<div className="row">
<div className="col-2 ">

<h3 className="mt-4 "><Link to="" className="text-info">Top Sales</Link></h3>
<h3><Link to="" className="text-danger">Flash Sales</Link></h3>
<h3><Link to="" className="text-success">New Arrivals</Link></h3>

<h2 className="mt-4 text-primary">Categories</h2>
<div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label className="form-check-label" for="flexCheckDefault">
   Laptops
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label className="form-check-label" for="flexCheckDefault">
     Shoes
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label className="form-check-label" for="flexCheckDefault">
   Mobiles
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label className="form-check-label" for="flexCheckDefault">
        Gym & Fitness
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label className="form-check-label" for="flexCheckDefault">
      Clothes
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label className="form-check-label" for="flexCheckDefault">
   Kids
    </label>
  </div>
  <h2 className="mt-4 text-primary">Prices</h2>
  <div className="form-check mt-3">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label className="form-check-label" for="flexRadioDefault1">
    All
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label className="form-check-label" for="flexRadioDefault1">
     Above Nrs.1,00,000
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label className="form-check-label" for="flexRadioDefault1">
     Nrs.80,000-1,00,000
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label className="form-check-label" for="flexRadioDefault1">
      Nrs.50,000-80,000
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label className="form-check-label" for="flexRadioDefault1">
    Nrs.20,000-50,000
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label className="form-check-label" for="flexRadioDefault1">
     Nrs.5,000-20,000
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label className="form-check-label" for="flexRadioDefault1">
  Below Nrs.5,000
    </label>
  </div>




</div>
<div className="col-10 border border-1 ">
<div className="container-fluid mt-3">
  <div className="row row-cols-1 row-cols-md-2 g-3">
    <div className="col custom-height">
      <div className="card">
        <img src="https://media.istockphoto.com/photos/laptop-with-blank-screen-isolated-on-white-background-picture-id1128662796?b=1&k=20&m=1128662796&s=612x612&w=0&h=lRuomI_i4d746HCiIWypX4QXjHOMC3z7hm47nuf70jg=" className="card-img-top" height="200px" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col custom-height">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="card-img-top " height="200px" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col custom-height">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top " height="200px" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content.this is a longer card</p>
        </div>
      </div>
    </div>
    <div className="col custom-height">
      <div className="card">
        <img src="https://media.istockphoto.com/photos/laptop-with-blank-screen-isolated-on-white-background-picture-id1128662796?b=1&k=20&m=1128662796&s=612x612&w=0&h=lRuomI_i4d746HCiIWypX4QXjHOMC3z7hm47nuf70jg=" className="card-img-top" height="200px" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>

</div>




</div>


</div>




</div>
    </>
  )
}

export default MyProducts