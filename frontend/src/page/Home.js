import React from 'react'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'

import Navbar from '../component/Navbar'
import Product from '../component/Product'
import "../mystyle.css"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Product/>
    <Footer/>
    </>
  )
}

export default Home