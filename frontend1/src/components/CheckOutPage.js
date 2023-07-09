import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const CheckOutPage = () => {

    const [searchParam]=useSearchParams()
    const[items,setItems]=useState([])
    const buyProducts=async()=>{
      const data=await fetch(`https://dummyjson.com/products/${searchParam.get("v")}`)
      const json=await data.json()
      setItems(json)
    }
    const [isloading,setIsLoading]=useState(false)
    const handleOnClick=()=>{
      setIsLoading(true)
    }
    setTimeout(() => {
          window.location.href='/home'
    }, 2000);
    
    useEffect(()=>{
        buyProducts()
    },[])
  
  return (
    <>
    <div className='flex bg-gray-200 p-2 font-Poppins'>
        <div className='bg-white ml-1 mr-[5px] w-1/2 h-[587px] rounded-xl'>
          <div className='flex justify-between mt-[100px]'>
            <div className='text-2xl font-bold pr-2'>Subtotal:</div>
            <div className='font-bold'>₹{((items.price) * 81).toLocaleString()}.00</div>
          </div>
          <div className='mt-[100px] w-full h-[100px] bg-gray-200 '>
          <div className='mt-16 flex justify-between pt-2'>
            <div className='flex'>
              <img src={items.thumbnail} alt="loading" className='w-[170px] h-[80px] rounded-lg'/>
              <div>
                <div className='text-xl font-bold mt-1 pl-1'>{items.title}</div>
                <div className='text-md font-thin mt-1 pl-1'>{items.brand}</div>
              </div>
              </div>
              <div>
                  <div className='text-xl font-bold mt-1 pr-1'>₹{((items.price) * 81).toLocaleString()}.00</div>
                  <div className='font-thin line-through mt-1 pl-9'>₹{(((items.price)*81)/(1-items.discountPercentage/100)).toFixed(2).toLocaleString()}</div>
                  </div>
          </div>
          </div>

        </div>
        <div className=' bg-white  mr-1 ml-1 w-1/2 h-[587px] rounded-xl font-sans pt-[80px] pl-[150px] '>
           <div>
            <button className='bg-black text-white w-[300px] h-[30px] rounded-md shadow-black shadow-sm mb-[15px] hover:shadow-lg'>GPay</button></div>
            <div className='flex text-gray-400 mb-[15px]'>
              <div className='w-[94px] h-[0px] border border-gray-400 mt-[10px]'></div>
              <div className='font-light text-sm ml-1 mr-1 '>Or pay with card</div>
              <div className='w-[94px] h-[0px] border border-gray-400 mt-[10px]'></div>
            </div>
            <div className='text-[12px]'>E-mail</div>
            <div><input type="email"  className=' pl-1 border border-gray-300 w-[300px] h-[30px] rounded-md font-Poppins shadow-sm mb-[15px]' placeholder='' /></div>
            <div className='text-[12px]'>Card details</div>
            <div><input type="text" className='pl-1 border border-gray-300 w-[300px] h-[30px] rounded-md font-Poppins shadow-sm mb-[15px]' /></div>
            <div className='flex'>
              <input type="number" className='border border-gray-300 w-[150px] h-[30px] rounded-l-md font-Poppins shadow-sm mb-[15px] text-sm pl-1'  placeholder='MM/YY'/>
              <input type="password" className='border border-gray-300 w-[150px] h-[30px] rounded-r-md pl-1 font-Poppins shadow-sm mb-[15px] text-sm' placeholder='CVC' />
            </div>
            <div className='text-[12px]'>Name on card</div>
            <div><input type="text" className='border border-gray-300 w-[300px] h-[30px] rounded-md font-Poppins shadow-sm mb-[15px]' /></div>
            <div className='text-[12px]'>Country or region🚩</div>
            <div><input type="number" className='border border-gray-300 w-[300px] h-[30px] rounded-md font-Poppins shadow-sm mb-[15px] pl-1 text-sm' placeholder='Zip code'/></div>
            <button className='bg-green-400 text-white w-[300px] h-[30px] rounded-md font-Poppins shadow-green-300 shadow-sm mb-[15px] hover:bg-green-700 ' onClick={handleOnClick}>
              {isloading ? <span className='animate-spin'></span> : (<div>Pay ₹((items.price) * 81).toLocaleString().00</div>)}
              </button></div>
           </div>
          
    </>
  )
}

export default CheckOutPage