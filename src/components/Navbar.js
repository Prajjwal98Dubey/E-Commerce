import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex mt-2 text-1xl ml-2 font-bold'>
    <Link to='/electronics'><button className='border border-blue-900 p-1 rounded-lg bg-blue-400 w-[200px] h-[50px]'>Electronics<sup className='font-bold'>most popular</sup></button></Link>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Mens Wear</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Women Wear</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Child</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Decoration</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Sport Equipments</button>
    <button className='border border-blue-900 p-1 rounded-lg bg-blue-400  w-[200px] h-[50px]'>Utensils</button>
    </div>
    </>
  )
}

export default Navbar