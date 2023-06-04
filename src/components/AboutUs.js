import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='mt-4'>
    <div className='text-6xl font-bold mt-16  text-center font-Poppins h-fit'>To Create,List,Deliver the Best Products in the World and make it Comfortable for people to <span className='text-green-500 font-extrabold'>"Buy" </span>it...</div>
    <Link to='/home'><button className='bg-blue-600 ml-[530px] w-[210px] shadow-xl pl-5 text-center rounded-lg p-2 mt-24 mb-[250px] font-Poppins text-white text-2xl hover:bg-blue-950 hover:shadow-pink-700 h-fit'>Explore🚀</button></Link>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs