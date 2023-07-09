import React from 'react'
import AddToCartPage from './AddToCartPage'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from './cartSlice'

const AddToCartPageMain = () => {
    const dispatch=useDispatch()
    const items=useSelector((store)=>store.cart.items)
    // const handleClearCart=()=>{
    //      dispatch(clearCart)
    // }
  return (
    <>
    {items.map((item)=><AddToCartPage key={item.id} item={item}/>)}
    </>
  )
}

export default AddToCartPageMain