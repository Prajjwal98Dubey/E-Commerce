import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import VideoContainer from './VideoContainer'

const Decorations = () => {
  return (
    <>
     <>
     <Header/>
     <Navbar/>
     <div className='flex flex-wrap ml-[55px] mt-2'>
    <VideoContainer/>
    </div>
     <Footer/>
     </>
    </>
  )
}

export default Decorations