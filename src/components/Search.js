import React, { useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchShimmer from './SearchShimmer'
import { useSearchParams} from 'react-router-dom'
import { useState } from 'react'
const Search = () => {
  const [searchParam] = useSearchParams()
  const element=searchParam.get("v")
  const[product,setProduct]=useState([])
  useEffect(()=>{
    getProduct()
  },[])
  const getProduct=async()=>{
    const data=await fetch('https://dummyjson.com/products')
    const json =await data.json()
    setProduct(json.products)
  }
  const filterData=(element,product)=>{
    const data=product.filter((p)=>p.title.includes(element))
     return setProduct(data)
  }
  return (
    <>
    <Header/>
    <Navbar/>
    {/* <div>{product.map((p)=>)}</div> */}
    <SearchShimmer element={element}/>
    <Footer/>
    </>
  )
}

export default Search