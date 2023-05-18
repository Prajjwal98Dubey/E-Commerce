import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='border border-t-stone-900 '>
        <ul className='flex text-xl justify-around '>
          <li className='font-semibold hover:underline cursor-pointer'>Home</li>
          <li className='font-semibold hover:underline cursor-pointer'>Contact</li>
          <li>©2023</li>
          <li className='font-semibold hover:underline cursor-pointer'>About Us</li>
          <li className='font-semibold hover:underline cursor-pointer'>Carrer</li>
        </ul>
        <div className='font-semibold text-center'>Thank you for coming, Visit us Again!!!!</div>
      </div>
    </>

  )
}

export default Footer