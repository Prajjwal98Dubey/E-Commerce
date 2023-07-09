import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer'
import Header from './Header'
import Footer from './Footer'


const MainBody = () => {
    const [selected,setSelected]=useState("")
    return (
        <>
            <Header/>
            <Navbar />
            <MainContainer />
            <Footer/>
            
        </>
    )
}

export default MainBody