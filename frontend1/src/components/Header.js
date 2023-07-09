import React, { useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CART_IMG } from './constants'
const Header = () => {
  const [text, setText] = useState("")
  const[product,setProduct]=useState([])
    const getProduct=async()=>{
      const data= await fetch('https://dummyjson.com/products')
      const json= await data.json()
      setProduct(json.products)
    }
    const cartQuantity=useSelector((store)=>store.cart.cartQuantity)
  return (
    <>
      <div className='flex flex-col items-center sticky top-0'>
        <ul className='flex w-full font-Poppins justify-around font-semibold bg-green-500 h-[56px] p-2'>
          <Link to='/'><li className='text-2xl  hover:underline'>EasyShop</li></Link>
            <li><input className='w-[400px] h-[35px] rounded-l-lg mt-[1px] pl-2' placeholder='Search products,brand and more' onChange={(e) => setText(e.target.value)} value={text} type='search' />
            <Link to={'/search?v='+text}><button className='border border-white w-[50px] h-[35px] hover:bg-green-300 rounded-r-lg'>🔎</button></Link></li>
          <Link to='/AddToCart'><li className=' ml-6 text-2xl w-fit '><div className='flex w-fit h-fit'> 
             <div className='text-2xl w-fit h-fit hover:underline'>Cart</div>
          <div className='ml-[5px] text-[20px] mb-4 font-bold'>{cartQuantity}</div>
      </div></li></Link>
        </ul>
      </div>
    </>
  )
}

export default Header