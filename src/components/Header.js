import React from 'react'

const Header = () => {
  return (
    <>
     <ul className='flex justify-around text-2xl bg-blue-600 h-[50px] p-2 rounded-2xl mt-1'>
        <li>EasyShop</li>
        <li><input className='w-[400px] rounded-lg' type='search'/></li>
        <li>Cart</li>
    </ul>
    </>
  )
}

export default Header