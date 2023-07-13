import React from 'react'
import Carousel from '../component/Carousel'
import Cart from '../component/Cart'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Signin from '../component/Signin'


const Layout = () => {
  return (
    <>
    <Carousel/>
    <Cart/>
    <Signin/>
    <Footer/>
    <Navbar/>
    
    </>
  )
}

export default Layout