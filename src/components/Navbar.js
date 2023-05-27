import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    {/* <div className='flex mt-2 text-1xl ml-2 font-bold'>
    <Link to='/electronics'><button className='border border-blue-900 p-1 rounded-lg bg-blue-400 w-[200px] h-[50px]'>Electronics<sup className='font-bold'>most popular</sup></button></Link>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Mens Wear</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Women Wear</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Child</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Decoration</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Sport Equipments</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Utensils</button>
    </div> */}
     <div>
      <ul className='flex justify-evenly  border border-b-black border-t-white font-semibold font-Poppins pt-[10px] pb-[10px] '>
       <Link to='/electronics'><li className='hover:underline cursor-pointer'>Electronics</li></Link> 
        <Link to='/mens-wear'><li className='hover:underline cursor-pointer'>Men's Wear</li></Link>
        <Link to='/women-wear'><li className='hover:underline cursor-pointer'>Women's Wear</li></Link>
        <Link to='/child-wear'><li className='hover:underline cursor-pointer'>Child Wear</li></Link>
        <Link to='/decorations'><li className='hover:underline cursor-pointer'>Decorations</li></Link>
      <Link to='/sports-equipment'><li className='hover:underline cursor-pointer'>Sports Equipments</li></Link>
        <Link to='/beauty'><li className='hover:underline cursor-pointer'>Beauty</li></Link>
      </ul>
     </div>
    </>
  )
}

export default Navbar