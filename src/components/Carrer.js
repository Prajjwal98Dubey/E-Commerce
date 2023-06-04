import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Carrer = () => {
  const[isClicked,setIsClicked]=useState(false)
  const handleClick=()=>{
    setIsClicked(true)
  }
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='flex flex-col items-center justify-center p-4 font-Poppins mt-24'>
      <div className='font-bold text-6xl mb-6'>Carrers At <span className='text-green-500 '>EasyShop</span></div>
      <div className='text-2xl mb-5'>Currently only <Link to='https://github.com/Prajjwal98Dubey' target='_blank'><span className='text-4xl font-bold text-pink-600 font-Poppins animate-pulse'>'I'</span></Link> am working</div>
      <div className='text-2xl'>No Jobs Positions as of Now. Recession🥲🥲🥲</div>
      <div className='text-2xl mt-4 animate-pulse2 '>You are Rejected even before applying for the job.Think about how poor your life is.</div>
      </div>
      <Link to='/home'><button className='bg-blue-600 ml-[530px] w-[210px] shadow-xl pl-5 text-center rounded-lg p-2 mt-20 mb-[200px] font-Poppins text-white text-2xl hover:bg-blue-950 hover:shadow-pink-700 h-fit'>Explore🚀</button></Link>
       
    <Footer/>
    </>

  )
}

export default Carrer