import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeToCart } from './cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddToCartPage = ({item}) => {
  const dispatch=useDispatch()

  const handleRemoveToast=()=>{
    toast.error(`${item.title} removed from cart`,{
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  return (
    <>
    <div className='flex ml-16 mt-5 font-Poppins mb-4'>
        <img src={item.thumbnail} alt="loading" className='w-[200px] h-[150px] rounded-lg' />
        <div className='ml-2'>
            <div className='text-xl font-bold mb-1'>{item.title}</div>
            <div className='font-light mb-1'>{item.description}</div>
            <div className='text-xl font-bold mb-1'>₹{((item.price) * 81).toLocaleString()}.00</div>
            <div className='font-light mb-1'>⭐{item.rating}</div>
            <div className='flex text-blue-600  '>
                <div className='text-[12px] font-thin mr-3 cursor-pointer hover:text-blue-900' onClick={()=>{
                  dispatch(removeToCart(item))
                  handleRemoveToast()
                  }}>remove from cart<ToastContainer/></div>
                <Link to={'/buy?v='+item.id}><div className='text-[12px] font-thin mr-3 cursor-pointer hover:text-blue-900'>buy this</div></Link>
                <div className='text-[12px] font-thin cursor-pointer hover:text-blue-900'>save for review</div>
            </div>
        </div>

    </div>
    </>
  )
}

export default AddToCartPage