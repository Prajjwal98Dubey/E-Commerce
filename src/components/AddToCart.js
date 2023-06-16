import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import AddToCartShimmer from './AddToCartShimmer'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddToCartPage from './AddToCartPage'

const AddToCart = () => {
  const [searchParam] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState([])
  useEffect(() => {
    getProduct()
  }, [])
  const getProduct = async() => {
    const data = await fetch(`https://dummyjson.com/products/${searchParam.get("v")}`)
    const json = await data.json()
    setProduct(json)
    setIsLoading(false)
  }

  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? <AddToCartShimmer/>: <AddToCartPage product={product}/> }
      <Footer />
    </>
  )
}

export default AddToCart