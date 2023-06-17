import React from 'react'
import { EMPTY_CART_IMG } from './constants'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const NoItemCart = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='flex flex-col items-center justify-center font-Poppins'>
    <div className='text-center mb-[150px]'>
    <img src={EMPTY_CART_IMG} alt="loading"  className='w-[221px] h-[162px]  mt-[100px]'/>
    <div>Missing Cart Items!!!</div>
    <div>Add some items in the cart!!!</div>
    </div></div>
    <Footer/>
    </>
  )
}

export default NoItemCart