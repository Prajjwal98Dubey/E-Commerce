import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className='border border-t-stone-900 '>
        <ul className='flex text-xl justify-around '>
         <Link to='/home'><li className='font-semibold hover:underline cursor-pointer'>Home</li></Link>
          <Link to='/contact'><li className='font-semibold hover:underline cursor-pointer'>Contact</li></Link>
          <li>©2023</li>
          <Link to='/about-us'><li className='font-semibold hover:underline cursor-pointer'>About Us</li></Link>
          <Link to='/carrer'><li className='font-semibold hover:underline cursor-pointer'>Carrer</li></Link>
        </ul>
        <div className='font-semibold text-center'>Thank you for coming, Visit us Again!!!!</div>
      </div>
    </>

  )
}

export default Footer