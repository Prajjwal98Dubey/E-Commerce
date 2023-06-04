import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import SinglePageProductShimmer from './SinglePageProductShimmer'
import MainContainerShimmer from './MainContainerShimmer'

const Cart = () => {
  return (
    <>
     <Header/>
     <Navbar/>
     {/* <div>This the Cart Component</div> */}
     <SinglePageProductShimmer/>
     <MainContainerShimmer/>
     <Footer/>
    </>
  )
}

export default Cart