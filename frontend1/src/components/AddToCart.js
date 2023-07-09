import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import AddToCartShimmer from './AddToCartShimmer'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddToCartPage from './AddToCartPage'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, getTotals } from './cartSlice'
import NoItemCart from './NoItemCart'
import AddToCartPageMain from './AddToCartPageMain'

const AddToCart = () => {
  const [searchParam] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState([])
  const items = useSelector((store) => store.cart.items)
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    getProduct()
    dispatch(getTotals)
  }, [cart, dispatch])
  const getProduct = async () => {
    const data = await fetch(`https://dummyjson.com/products/${searchParam.get("v")}`)
    const json = await data.json()
    setProduct(json)
    setIsLoading(false)
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  if (items.length === 0 && isLoading === false) {
    return <NoItemCart />
  }
  // else{
  //   getProduct()
  // }

  return (
    <>
      <Header />
      <Navbar />
      <div onClick={() => handleClearCart()} className='text-blue-600 text-3xl hover:text-green-400 hover:underline  font-bold cursor-pointer w-fit'>Clear Cart</div>
      {isLoading ? <AddToCartShimmer /> : items.map((item) => <AddToCartPage key={item.id} item={item} />)}
      <div className='text-right text-blue-600 text-3xl hover:text-green-400'>Subtotal:{cart.cartAmount}</div>
      <Footer />
    </>
  )
}

export default AddToCart