import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const SinglePageProductShimmer = () => {
  return (
    <>
    <Header/>
    <Navbar/>
     <div className='flex mt-5 animate-pulse'>
      <div>
        <div className=' ml-2 mt-2 w-[550px] h-[400px] rounded-lg bg-gray-300'>
        </div>
        <div className='flex mt-2 p-1 mb-2 ml-12 '>
        <div className='w-[115px] h-[50px] mr-2 bg-gray-300 rounded-lg ml-16'></div>
        <div className='w-[115px] h-[50px] bg-gray-300 rounded-lg'></div>
        </div>
        
      </div>
      <div className='ml-5'>
        <div className=' ml-28 w-[400px] h-[15px] bg-gray-300 mt-4 rounded-lg'>
        </div>
        <div className=' ml-40 w-[300px] h-[15px] bg-gray-300 mt-4 rounded-lg'>
        </div>
        <div className=' ml-3 w-[600px] h-[15px] bg-gray-300 mt-4 rounded-lg'>
        </div>
        <div className=' ml-3 w-[600px] h-[15px] bg-gray-300 mt-4 rounded-lg'>
        </div>
        <div className='flex ml-40 mt-4'>
          <div className='w-[100px] h-[50px] bg-gray-300 rounded-lg mr-2'></div>
          <div className='w-[100px] h-[50px] bg-gray-300 rounded-lg mr-2'></div>
          <div className='w-[100px] h-[50px] bg-gray-300 rounded-lg'></div>
        </div>
        <div className=' ml-[280px] w-[75px] h-[35px] rounded-lg mt-2 bg-gray-300'></div>
        <div className=' ml-[280px] w-[75px] h-[35px] rounded-lg mt-2 bg-gray-300'></div>
        <div className='w-[620px] h-[150px] bg-gray-300 ml-3 mt-3 rounded-lg'></div>
      </div>
     </div>
    <Footer/>
    </>
  )
}

export default SinglePageProductShimmer