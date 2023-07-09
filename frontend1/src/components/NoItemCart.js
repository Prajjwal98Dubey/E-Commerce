import React from 'react'
import { EMPTY_CART_IMG } from './constants'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import leftarrow from '../images/leftarrow.png'
import { Link } from 'react-router-dom'

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
    <div className='flex w-fit ml-5'>
      <img className='w-[35px]' src={leftarrow} alt="loading" />
      <Link to='/home'><div className=' mt-[5px] ml-[4px] font-bold hover:underline cursor-pointer'>Start Shopping</div></Link>
    </div>
    </div></div>
    <Footer/>
    </>
  )
}

export default NoItemCart