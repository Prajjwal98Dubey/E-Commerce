import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import AddToCartShimmer from './AddToCartShimmer'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddToCartPage from './AddToCartPage'
import { useDispatch, useSelector } from 'react-redux'
import store from './store'
import { addToCart } from './cartSlice'
import NoItemCart from './NoItemCart'

const AddToCart = () => {
  const [searchParam] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState([])
  const items=useSelector((store)=>store.cart.items)
  const dispatch=useDispatch()
  useEffect(() => {
    getProduct()
  }, [])
  const getProduct = async() => {
    const data = await fetch(`https://dummyjson.com/products/${searchParam.get("v")}`)
    const json = await data.json()
    setProduct(json)
    setIsLoading(false)
  }

  if(items.length===0 && isLoading===false){
    return <NoItemCart/>
  }
  // else{
  //   getProduct()
  // }

  return (
    <>
      {/* <Header />
      <Navbar />
      {isLoading ? <AddToCartShimmer/>: <AddToCartPage product={product}/> }
      <Footer /> */}


      <Header />
      <Navbar />
      {isLoading ? <AddToCartShimmer/>: items.map((item)=><AddToCartPage item={item}/>) }
      <Footer />
    </>
  )
}

export default AddToCart