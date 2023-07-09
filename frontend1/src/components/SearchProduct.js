import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SearchProduct = ({ products }) => {
  const [searchParam] = useSearchParams()
  const element = searchParam.get("v")
  return (
    <>
      <Link to={'/singleproductpage?v='+products.id} target='_blank'><div className='cursor-pointer hover:text-green-700'>
      <div className='flex ml-16 mt-5'>
        <img src={products.thumbnail} alt="loading" className='w-[300px] h-[145px] rounded-lg' />
        <div className='ml-2 font-Poppins mt-2'>
          <div className='text-xl font-bold mb-1'>{products.title}</div>
          <div className='font-light  mb-1'>{products.description}</div>
          <div className='font-semibold text-xl mb-1'>₹{((products.price) * 81).toLocaleString()}.00 <span className='font-light line-through text-sm text-gray-600'>₹{(((products.price)*81)/(1-products.discountPercentage/100)).toFixed(2).toLocaleString()}</span> </div>
          <div className='text-sm'>⭐{products.rating}</div>
        </div>
      </div>
      </div>
      </Link>
    </>


  )
}

export default SearchProduct