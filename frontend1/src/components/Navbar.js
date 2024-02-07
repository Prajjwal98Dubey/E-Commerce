import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [selected, setSelected] = useState("")
  const handleSelectedClick = (category) => {
    console.log("before",selected)
    setSelected(category)
    console.log("After",selected)
  }
 
  useEffect(()=>{
    console.log("inside useEffect",selected) 
  },[selected])

  return (
    <>
      <div className=' flex flex-col items-center mt-2 '>
        <ul className='initial:hidden md:block bg-blue-500 text-white rounded-full w-full border border-t-white font-semibold font-Poppins pt-[10px] pb-[10px] '>
          <div className='flex justify-evenly'>
          <div onClick={()=>handleSelectedClick('electronics')}><Link to='/electronics'><li className={`hover:underline cursor-pointer ${selected === 'electronics' ? 'text-purple-600' : 'text-white'}`} >Electronics</li></Link></div>
          <div  onClick={() => handleSelectedClick('mens')}><Link to='/mens-wear'><li className={`hover:underline cursor-pointer ${selected === 'mens' ? 'text-purple-600' : 'text-white'}`}>Men's Wear</li></Link></div>
          <div onClick={() => handleSelectedClick('women')}><Link to='/women-wear'><li className={`hover:underline cursor-pointer ${selected === 'women' ? 'text-purple-600' : 'text-white'}`} >Women's Wear</li></Link></div>
          <div onClick={() => handleSelectedClick('child')}><Link to='/child-wear'><li className={`hover:underline cursor-pointer ${selected === 'child' ? 'text-purple-600' : 'text-white'}`} >Child Wear</li></Link></div>
          <div onClick={() => handleSelectedClick('decorations')}><Link to='/decorations'><li className={`hover:underline cursor-pointer ${selected === 'decorations' ? 'text-purple-600' : 'text-white'}`}>Decorations</li></Link></div>
          <div  onClick={() => handleSelectedClick('sports')}><Link to='/sports-equipment'><li className={`hover:underline cursor-pointer ${selected === 'sports' ? 'text-purple-600' : 'text-white'}`}>Sports Equipments</li></Link></div>
          <div onClick={() => handleSelectedClick('beauty')}><Link to='/beauty'><li className={`hover:underline cursor-pointer ${selected === 'beauty' ? 'text-purple-600' : 'text-white'}`} >Beauty</li></Link></div>
          </div>
        </ul>
       
      </div>
    </>
  )
}

export default Navbar