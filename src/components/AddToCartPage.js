import React from 'react'
import { Link } from 'react-router-dom'

const AddToCartPage = ({product}) => {
  return (
    <>
    <div className='flex ml-16 mt-5 font-Poppins mb-4'>
        <img src={product.thumbnail} alt="loading" className='w-[200px] h-[150px] rounded-lg' />
        <div className='ml-2'>
            <div className='text-xl font-bold mb-1'>{product.title}</div>
            <div className='font-light mb-1'>{product.description}</div>
            <div className='text-xl font-bold mb-1'>₹{((product.price) * 81).toLocaleString()}.00</div>
            <div className='font-light mb-1'>⭐{product.rating}</div>
            <div className='flex text-blue-600  '>
                <div className='text-[12px] font-thin mr-3 cursor-pointer hover:text-blue-900'>remove from cart</div>
                <Link to={'/buy?v='+product.id}><div className='text-[12px] font-thin mr-3 cursor-pointer hover:text-blue-900'>buy this</div></Link>
                <div className='text-[12px] font-thin cursor-pointer hover:text-blue-900'>save for review</div>
            </div>
        </div>

    </div>
    </>
  )
}

export default AddToCartPage