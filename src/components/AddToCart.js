import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const AddToCart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='ml-6 animate-pulse'>
      <div className='flex ml-16 mt-5'>
        <div className='w-[200px] h-[100px] bg-gray-300 rounded-lg'></div>
        <div className='ml-2'>
          <div className='w-[700px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[500px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[300px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[100px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      <div className='flex ml-16 mt-5'>
        <div className='w-[200px] h-[100px] bg-gray-300 rounded-lg'></div>
        <div className='ml-2'>
          <div className='w-[700px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[500px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[300px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[100px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      <div className='flex ml-16 mt-5'>
        <div className='w-[200px] h-[100px] bg-gray-300 rounded-lg'></div>
        <div className='ml-2'>
          <div className='w-[700px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[500px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[300px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[100px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      <div className='flex ml-16 mt-5 mb-3'>
        <div className='w-[200px] h-[100px] bg-gray-300 rounded-lg'></div>
        <div className='ml-2'>
          <div className='w-[700px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[500px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[300px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
          <div className='w-[100px] h-[15px] mt-2 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default AddToCart