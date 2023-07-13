import React from 'react'

const Product = () => {
  return (
    <>
     <div class="container-fluid text-muted text-center text-decoration-underline mt-4">
    <h1>Products</h1>
  </div>
  <div class="container mt-3">
    <div class="card-group">
      <div class="card">
        <img src="https://media.istockphoto.com/photos/laptop-with-blank-screen-isolated-on-white-background-picture-id1128662796?b=1&k=20&m=1128662796&s=612x612&w=0&h=lRuomI_i4d746HCiIWypX4QXjHOMC3z7hm47nuf70jg=" class="card-img-top custom-i" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Dell inspiron</h5>
          <h6>Nrs.1,00,000</h6>

          <p class="card-text text-truncate">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="btn btn-primary w-100">See More</div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="card-img-top custom-i" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Macbook Air</h5>
          <h6>Nrs.1,20,000</h6>
          
          <p class="card-text text-truncate">This card has supporting text below as a natural lead-in to additional content.</p>
          <div class="btn btn-primary w-100">See More</div>

        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top custom-i" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Acer</h5>
          <h6 class="text-muted">Nrs.1,10,000</h6>

          <p class="card-text text-truncate">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <div class="btn btn-primary w-100">See More</div>

        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Product