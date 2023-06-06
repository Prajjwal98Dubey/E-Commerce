import React, { useEffect } from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer'
import Header from './Header'
import Footer from './Footer'


const MainBody = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <MainContainer />
            <Footer/>
            
        </>
    )
}

export default MainBody