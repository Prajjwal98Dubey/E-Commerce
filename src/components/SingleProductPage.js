import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import SinglePageProductShimmer from './SinglePageProductShimmer'

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
        <Navbar/>
         <div className='flex'>
            <div >
                <img className='w-[550px] h-[400px] mt-2 ml-2' src={item.thumbnail} alt="loading" />
            </div>
            <div className='mt-2 text-2xl ml-3'>
                <ul>
                
                    <li>{item.title}</li>
                    <li>Company : {item.brand}</li>
                    <li>{item.description}</li>
                      <li>
                        <div>
                            <ul className=' ml-0 flex w-[200px] justify-around'>
                                <li>{(item.price)*81}</li>
                                <li>234</li>
                                <li className='text-xl text-center'>{item.discountPercentage}%off</li>
                            </ul>
                        </div>
                      </li>
                      <li>{item.rating}</li>
                      <li> Stock left :{item.stock}</li>
                      <li>
Bank Offer10% off on DBS Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
<li>
Bank Offer10% off on DBS Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
<li>
Bank Offer10% off on DBS Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
                      </ul>
            </div>
         </div>
      </>
  )
}

export default SingleProductPage