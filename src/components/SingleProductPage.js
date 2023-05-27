import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import SinglePageProductShimmer from './SinglePageProductShimmer'
import Header from './Header'
import Footer from './Footer'

const SingleProductPage = () => {
    const[searchParam] = useSearchParams()
    const[item,setItem]=useState({})
    const[isloading,setIsLoading]=useState(true)
    useEffect(()=>{
        getSingleProduct()
    },[])
    const getSingleProduct=async()=>{
        const data = await fetch(`https://dummyjson.com/products/${searchParam.get("v")}`)
        const json = await data.json()
        setItem(json)
        setIsLoading(false)
    }

    if(isloading===true) return <SinglePageProductShimmer/>
     
  return (
      <>
        <Header/>
        <Navbar/>
         <div className='flex'>
            <div >
                <img className='w-[550px] h-[400px] mt-2 ml-2 cursor-pointer  hover:shadow-lg hover:rounded-2xl' src={item.thumbnail} alt="loading" />
                <div className='mb-4 mt-4 text-center'>
                    <button className='border border-black mr-2 text-[18px] bg-black text-white rounded-lg w-[115px] h-[50px] hover:bg-green-600 hover:text-white font-semibold p-[3px]'>Add to Cart</button>
                    <button className='border border-black mr-2 text-[18px] bg-black text-white rounded-lg w-[115px] h-[50px] hover:shadow-lime-300 hover:shadow-2xl hover:bg-green-600 hover:text-white font-semibold'>Buy</button>
                </div>
            </div>
            <div className='mt-4 text-2xl ml-3'>
                <ul>
                
                    <li className='text-2xl font-serif font-extrabold'>{item.title}</li>
                    <li className='text-xl font-serif font-medium'>{item.brand}</li>
                    <li className='text-xl font-sans font-semibold mb-2'>{item.description}</li>
                      <li>
                        <div>
                            <ul className=' ml-0 flex w-[200px] justify-around text-left'>
                                <li className='text-4xl font-bold font-sans ml-28'>₹{((item.price)*81).toLocaleString()}</li>
                                <li className='ml-3 text-xl font-medium mt-2 line-through'>₹{(((item.price)*81)/(1-item.discountPercentage/100)).toFixed(0).toLocaleString()}</li>
                                <li className='text-[18px] p-[2px] mt-1 font-medium ml-2 border border-solid bg-red-600 text-white rounded-md'>{item.discountPercentage}%off</li>
                            </ul>
                        </div>
                      </li>
                      <li className='ml-5 text-xl border border-green-600 rounded-md text-white bg-green-600 w-[75px] font-mono'>⭐{(item.rating).toLocaleString()}</li>
                      <li className=' mt-2 ml-4 text-xl font-medium'>{item.stock}<span className='text-[15px] ml-1 w-[100px] p-1 border border-black text-white rounded-md bg-black'>in stock</span></li>
                      <div className='border border-black text-center rounded-3xl p-2 bg-black text-white font-semibold font-sans mt-4 mb-2 text-xl mr-2'>
                      <li className='cursor-pointer hover:bg-white hover:text-black hover:rounded-xl'>
Bank Offer 10% off on HDFC Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
<li className='cursor-pointer hover:bg-white hover:text-black hover:rounded-xl'>
Bank Offer 5% off on BOB Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
<li className='cursor-pointer hover:bg-white hover:text-black hover:rounded-xl'>
Bank Offer 5% off on SBI Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
</div>
                      </ul>
            </div>
         </div>
         <div className='flex w-fit ml-[410px] mt-3 '>
            <img src={item.images[0]} className=' rounded-xl hover:border border-yellow-500 mr-2 w-[180px]' alt="loading" />
            <img className=' rounded-xl hover:border border-yellow-500 mr-2 w-[180px]' src={item.images[1]} alt="loading" />
            <img className=' hover:border border-yellow-500 mr-2 rounded-xl w-[180px]' src={item.images[2]} alt="loading" />
         </div>
         <Footer/>
      </>
  )
}

export default SingleProductPage