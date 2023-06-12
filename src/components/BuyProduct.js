import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const BuyProduct = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='flex animate-pulse ml-72 mt-28 mb-[300px]'>
      <div className='w-[300px] h-[150px] bg-gray-300 rounded-lg '></div>
      <div className='ml-3 mt-6'>
        <div className='h-[15px] w-[200px] rounded-lg bg-gray-300'></div>
        <div className='h-[15px] mt-3 w-[500px] rounded-lg bg-gray-300'></div>
        <div className='h-[15px] mt-3 w-[100px] rounded-lg bg-gray-300'></div>
        <div className='h-[25px] mt-3 w-[100px] rounded-lg bg-gray-300'></div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default BuyProduct