import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <ul className='flex justify-around text-2xl bg-blue-600 h-[50px] p-2 rounded-2xl mt-1'>
        <Link to='/'><li >EasyShop</li></Link>
        <li><input className='w-[400px] rounded-lg' type='search' /></li>
        <Link to='/cart'><li>Cart</li></Link>
      </ul>
    </>
  )
}

export default Header