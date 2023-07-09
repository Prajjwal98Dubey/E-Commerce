import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Header/>
    <Navbar/>  
     <div className='flex ml-40 mt-8 mb-4'>
      <div className='mr-8 mt-12'>
        <div className='pl-52 font-bold font-mono text-3xl'>Contact Us</div>
        <img className=' rounded-b-3xl shadow-xl rounded-l-3xl w-[500px] h-[300px] ' src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/8e58eff423685c98b3e0cd66/pexels-photo-2584269.png" alt="loading" />
      </div>
      <div className='border bg-gray-200 w-[473px] h-[500px] rounded-3xl pt-10'>
        <div className='text-center '>
        <div className='pb-4'>
        <div className='text-3xl text-green-500 font-bold pb-2'>CALL US</div>
        <div>+91 0909090923</div>
        <div>+91 9384923844</div>
        </div>
        <div className='pb-4 mt-8'>
        <div className='text-3xl text-green-500 font-bold pb-2'>LOCATION</div>
        <div>121 Rock Sreet, 21 Avenue,</div>
        <div>New York, NY 92103-9000</div>
        </div>
        <div className='pb-4 mt-8'>
        <div className='text-3xl text-green-500 font-bold pb-2'>OUR TOP SERVICES</div>
        <div className='font-bold'>Best Product Quality</div>
        <div className='font-bold'>Easy and Fast Delivery</div>
        <div className='font-bold'>Easy Return Policy</div>
        </div>
        </div>

      </div>
     </div>
    <Footer/>
    </>
  )
}

export default Contact