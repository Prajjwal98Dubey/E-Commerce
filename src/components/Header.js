import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='flex flex-col items-center sticky top-0'>
      <ul className='flex w-full font-Poppins justify-around font-semibold text-2xl bg-green-500 h-[56px] p-2'>
        <Link to='/'><li className='hover:underline'>EasyShop</li></Link>
        <li><input className='w-[400px] rounded-full mt-[3px]' type='search' /></li>
        <Link to='/cart'><li className='hover:underline'>Cart</li></Link>
      </ul>
      </div>
    </>
  )
}

export default Header