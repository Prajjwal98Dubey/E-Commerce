import React, { useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchShimmer from './SearchShimmer'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import SearchProduct from './SearchProduct'
const Search = () => {
  const [searchParam] = useSearchParams()
  const element = searchParam.get("v")
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getProduct(element)
  }, [element])
  const getProduct = async (element) => {
    const data = await fetch('https://dummyjson.com/products')
    const json = await data.json()
    const filterData = json.products.filter((p) => (p.title.toLowerCase().includes(element.toLowerCase()) || p.description.includes(element.toLowerCase())))
    setProduct(filterData)
    setIsLoading(false)
  }
  // const filterData=(element,product)=>{
  //   const data=product.filter((p)=>p.title.includes(element))
  //    return setProduct(data)
  // } 
  return (
    <>
      <Header />
      <Navbar />
      {isLoading===false && product.length===0 && <div className='text-center mt-20 mb-[350px] font-bold font-Poppins text-4xl'>No Result Found for "{element}"...</div>}
      {isLoading ? <SearchShimmer /> : product.map((prod) => <SearchProduct key={prod.id} products={prod} />)}
      <Footer />
    </>
  )
}

export default Search