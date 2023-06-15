import React, { useEffect, useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import BuyProductShimmer from './BuyProductShimmer'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const BuyProduct = () => {
  const[isLoading,setIsLoading]=useState(true)
  const[product,setProduct]=useState([])
  const [searchParam]=useSearchParams()
  useEffect(()=>{
    buyProducts()

  },[])
  const buyProducts=async()=>{
    const data=await fetch(`https://dummyjson.com/products/${searchParam.get("v")}`)
    const json=await data.json()
    setProduct(json)
    setIsLoading(false)
  }
<div className='flex animate-pulse ml-72 mt-28 mb-[300px]'>
      <div className='w-[300px] h-[150px] bg-gray-300 rounded-lg '></div>
      <div className='ml-3 mt-6'>
        <div className='h-[15px] w-[200px] rounded-lg bg-gray-300'></div>
        <div className='h-[15px] mt-3 w-[500px] rounded-lg bg-gray-300'></div>
        <div className='h-[15px] mt-3 w-[100px] rounded-lg bg-gray-300'></div>
        <div className='h-[25px] mt-3 w-[100px] rounded-lg bg-gray-300'></div>
      </div>
    </div>
  return (
    <>
    <Header/>
    <Navbar/>
    {isLoading ? <BuyProductShimmer/>:
    <>
     <div className='flex ml-56 mt-20 mb-[40px] '>
       <img src={product.thumbnail} alt="loading" className='w-[300px] h-[150px] rounded-lg' />
      <div className='ml-3 mt-6 font-Poppins'>
        <div className='text-2xl font-bold'>{product.title}</div>
        <div className='font-light'>{product.description}</div>
        <div className='font-bold'>₹{((product.price) * 81).toLocaleString()}.00 <span className='font-light line-through text-sm text-gray-600'>₹{(((product.price)*81)/(1-product.discountPercentage/100)).toFixed(2).toLocaleString()}</span></div>
      </div>
     </div>
     <div className='ml-[350px] mb-[50px] w-[550px] h-[230px] border border-gray-300 rounded-lg font-Poppins'>
       <div className='font-bold font-Poppins text-center mt-6 ml-5'>Order Summary</div>    
       <div className=' ml-2 flex justify-between'>
        <div className='mb-2 '>Original Price</div>
        <div className='font-light mr-2'>₹{(((product.price)*81)/(1-product.discountPercentage/100)).toFixed(2).toLocaleString()}</div>
       </div>
       <div className=' ml-2 flex justify-between'>
        <div className='mb-2'>Discount Applied</div>
        <div className=' mr-2 font-light'>{product.discountPercentage}% off</div>
       </div>
       <div className=' ml-2 flex justify-between'>
        <div className='mb-2'>Qty</div>
        <div className=' mr-2 font-light'>1</div>
       </div>
       <div className=' ml-2 flex justify-between'>
        <div className='text-2xl font-bold'>Subtotal Amount</div>
        <div className='mr-2 text-2xl font-bold'>₹{((product.price) * 81).toLocaleString()}.00</div>
       </div>
       <div className='flex flex-col items-center mt-2 ml-5'> 
         <Link to='/payout'><button className='w-[200px] h-[35px] rounded-lg bg-green-600 text-white hover:bg-green-800'>Pay ₹{((product.price) * 81).toLocaleString()}.00 </button></Link>
       </div>
     </div>
     </>
    }
    <Footer/>
    </>
  )
}

export default BuyProduct