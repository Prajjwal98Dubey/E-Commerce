import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductQuantity, addToCart, clearCart, decreasedCart, getTotals, removeToCart } from './cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { clear } from '@testing-library/user-event/dist/clear'
import { set } from 'mongoose'

const AddToCartPage = ({ item }) => {
  const[isClearCartVisible,setIsClearCartVisible]=useState(false)
  const dispatch = useDispatch()
  const cart=useSelector((state)=>state.cart)
  const handleRemoveToast = () => {
    toast.error(`${item.title} removed from cart`, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }
  
  const trim=(string)=>{
        if(string.length<100){
          return string
        }
        return string.substring(0,101)+"..."
  }

  // const handleClearCart=()=>{
  //   dispatch(clearCart())
  // }
  const handleDecreased=(item)=>{
      dispatch(decreasedCart(item))
  }
  const handleIncreased=(item)=>{
      dispatch(addToCart(item))
  }

  useEffect(()=>{
     setIsClearCartVisible(true)
     dispatch(getTotals)
  },[cart,dispatch])
  return (
    <>
    {console.log(cart.cartAmount)}
     {/* { isClearCartVisible && (<div className='w-full text-blue-600 hover:underline text-right pr-11 cursor-pointer' onClick={()=>handleClearCart}>Clear Cart</div>)} */}
      <div className='flex ml-16 mt-5 font-Poppins mb-4'>
        <img src={item.thumbnail} alt="loading" className='w-[200px] h-[150px] rounded-lg' />
        <div className='ml-2'>
          <div className='text-xl font-bold mb-1'>{item.title}</div>
          <div className='font-light mb-1'>{trim(item.description)}</div>
          <div className='text-xl font-bold mb-1'>₹{((item.price) * 81).toLocaleString()}.00</div>
          <div className='font-light mb-1'>⭐{item.rating}</div>
          <div className='flex text-blue-600  '>
            <div className='text-[12px] font-thin mr-3 cursor-pointer hover:text-blue-900' onClick={() => {
              dispatch(removeToCart(item))
              handleRemoveToast()
            }}>remove from cart<ToastContainer /></div>
            <Link to={'/buy?v=' + item.id}><div className='text-[12px] font-thin mr-3 cursor-pointer hover:text-blue-900'>buy this</div></Link>
            <div className='text-[12px] font-thin cursor-pointer hover:text-blue-900'>save for review</div>
            <div className='text-[12px] font-thin ml-3 flex '>
              <button className='w-[50px] mb-1' onClick={()=>handleDecreased(item)}>-</button>
              <div>{item.quantity}</div>
              <button className='w-[50px] mb-1' onClick={()=>handleIncreased(item)}>+</button>
            </div>
            <span className='ml-[100px] font-bold'>₹{(item.price * 81 *item.quantity).toLocaleString()}</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddToCartPage