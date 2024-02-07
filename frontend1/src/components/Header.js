import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { CART_IMG } from './constants'
const Header = () => {
  const [text, setText] = useState("")
  const [product, setProduct] = useState([])
  const cartQuantity = useSelector((store) => store.cart.cartQuantity)
  
  useEffect(() => {
    const getProduct = async () => {
      const data = await fetch('https://dummyjson.com/products?limit=100')
      const json = await data.json()
      const filterData = json.products.filter((d) => d.title.toLowerCase().includes(text.toLocaleLowerCase()) || d.description.toLowerCase().includes(text.toLowerCase()))
      setProduct(filterData)
    }

    const timer = setTimeout(() => {
      getProduct()
    }, 300)
    return () => {
      clearInterval(timer)
    }
  }, [text])
  return (
    <>
    <div className='md:hidden'>
      <div className='w-full bg-green-500 h-[56px] flex justify-center items-center text-white text-xl font-bold'>EasyShop</div>
    </div>
      <div className=' initial:hidden md:block flex flex-col items-center sticky top-0'>
        <ul className='flex w-full font-Poppins justify-around font-semibold bg-green-500 h-[56px] p-2'>
          <Link to='/'><li className='text-2xl hover:underline'>EasyShop</li></Link>
          <li><input className='w-[400px] h-[35px] rounded-l-lg mt-[1px] pl-2' placeholder='Search products,brand and more' onChange={(e) => setText(e.target.value)} value={text} type='search' />
            <Link to={'/search?v=' + text}><button className='border border-white w-[50px] h-[35px] hover:bg-green-300 rounded-r-lg'>🔎</button></Link>
            { text!=="" ? <div className=' fixed bg-white w-[400px] px-2 py-2 cursor-pointer rounded-lg '>
              <ul className=''>
                {product.map((p) => <li key={p.title} className='hover:bg-gray-200'><div className='mt-3'>🔍{p.title}</div></li>)}
              </ul>
            </div>: null}
          </li>
          <Link to='/AddToCart'><li className='text-2xl w-fit initial:hidden md:block '><div className='flex w-fit h-fit'>
            <div className='text-2xl w-fit h-fit hover:underline'>Cart</div>
            <div className='ml-[5px] text-[20px] mb-4 font-bold'>{cartQuantity}</div>
          </div></li></Link>
        </ul>
      </div>
    </>
  )
}

export default Header

{/* <AiOutlineSearch /> */}