import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { IMG_FB, IMG_IG, IMG_LN, IMG_TW } from './constants'

const AboutUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='mt-4'>
        <div className='text-6xl font-bold mt-16  text-center font-Poppins h-fit'>To Create,List,Deliver the Best Products in the World and make it Comfortable for people to <span className='text-green-500 font-extrabold'>"Buy"</span>it...</div>
        <Link to='/home'><button className='bg-blue-600 ml-[530px] w-[210px] shadow-xl pl-5 text-center rounded-lg p-2  mb-[70px] mt-24 font-Poppins text-white text-2xl hover:bg-black hover:shadow-green-600 h-fit'>Explore🚀</button></Link>
        <div className='flex ml-[485px] p-2 mb-[50px]'>
          <img src={IMG_FB} onClick={()=>
            alert("FaceBook Page is Build in progress!!!Meanwhile explore the Website!!! Thank You!!!")} alt="loading" className=' mr-2 w-[85px] h-[50px] rounded-xl hover:shadow-green-600 hover:shadow-xl cursor-pointer hover:border border-green-400' />
          <img src={IMG_TW}  onClick={()=>alert("Twiitter Page is Build in progress!!!Meanwhile explore the Website!!! Thank You!!!")} alt="loading" className='mr-2 w-[45px] h-[50px] rounded-xl hover:shadow-green-600 hover:shadow-xl cursor-pointer hover:border border-green-400' />
          <img src={IMG_IG} onClick={()=>alert("Instagram Page is Build in progress!!!Meanwhile explore the Website!!! Thank You!!!")} alt="loading" className=' mr-2 w-[75px] h-[55px] rounded-xl hover:shadow-green-600 hover:shadow-xl cursor-pointer hover:border border-green-400' />
          <img src={IMG_LN} onClick={()=>alert("LinkedIN Page is Build in progress!!!Meanwhile explore the Website!!! Thank You!!!")} alt="loading" className='w-[75px] h-[55px] rounded-xl hover:shadow-green-600 hover:shadow-xl cursor-pointer hover:border border-green-400' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs