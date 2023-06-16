import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import SinglePageProductShimmer from './SinglePageProductShimmer'
import Header from './Header'
import Footer from './Footer'
import UserReviewCard from './UserReviewCard'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './cartSlice'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
    const dispatch=useDispatch()
    const[searchParam] = useSearchParams()
    const[item,setItem]=useState({})
    const[isloading,setIsLoading]=useState(true)
    const[view,setView]=useState(false)
    useEffect(()=>{
        getSingleProduct()
    },[])
    const getSingleProduct=async()=>{
        const data = await fetch(`https://dummyjson.com/products/${searchParam.get("v")}`)
        const json = await data.json()
        setItem(json)
        setIsLoading(false)
    }

    if(isloading===true) return <SinglePageProductShimmer/>
     
  return (
      <>
        <Header/>
        <Navbar/>
         <div className='flex'>
            <div>
                <img className='w-[550px] h-[400px] mt-2 ml-2 cursor-pointer  hover:shadow-lg hover:rounded-2xl' src={item.thumbnail} alt="loading" />
                <div className='mb-4 mt-4 text-center'>
                    <Link to={'/addtocart?v='+item.id}><button className='border border-black mr-2 text-[18px] bg-black text-white font-Poppins rounded-lg w-[115px] h-[50px] hover:bg-green-600 hover:text-white font-semibold p-[3px]' onClick={()=>dispatch(addToCart())}>Add to Cart</button></Link>
                    <Link to={'/buy?v='+item.id}><button className='border border-black mr-2 text-[18px] bg-black text-white rounded-lg w-[115px] h-[50px] hover:shadow-lime-300 hover:shadow-2xl hover:bg-green-600 font-Poppins hover:text-white font-semibold'>Buy</button></Link>
                </div>
            </div>
            <div className='mt-4 text-2xl ml-3'>
                <ul>
                    <div className='flex flex-col items-center'>
                    <li className='text-2xl font-extrabold font-Poppins'>{item.title}</li>
                    <li className='text-xl font-Poppins font-medium  '>{item.brand}</li>
                    <li className='text-[17px] font-Poppins font-semibold mb-2'>{item.description}</li>
                    </div>
                      <li>
                        <div className='flex flex-col items-center'>
                            <ul className=' ml-0 flex w-[200px] justify-around text-left'>
                                <li className='text-4xl font-bold font-Poppins ml-28'>₹{((item.price)*81).toLocaleString()}.00</li>
                                <li className='ml-3 text-xl font-medium font-Poppins mt-2 line-through'>₹{(((item.price)*81)/(1-item.discountPercentage/100)).toFixed(2).toLocaleString()}</li>
                                <li className='text-[18px] p-[2px] font-Poppins mt-1 font-medium ml-2 border border-solid bg-red-600 text-white rounded-md'>{item.discountPercentage}%off</li>
                            </ul>
                        </div>
                      </li>
                      <div className='flex flex-col items-center'>
                      <li className='ml-5 text-xl border border-green-600 rounded-md text-white bg-green-600 w-[75px] font-Poppins'>⭐{(item.rating).toLocaleString()}</li>
                      <li className=' mt-2 ml-4 text-xl font-medium'>{item.stock}<span className='text-[15px] ml-1 w-[100px] font-Poppins p-1 border border-black text-white rounded-md bg-black'>in stock</span></li>
                      </div>
                      <div className='border border-black text-center rounded-3xl p-2 bg-black text-white font-semibold font-Poppins mt-4 mb-2 text-xl mr-2'>
                      <li className='cursor-pointer hover:bg-white hover:text-black hover:rounded-xl'>
Bank Offer 10% off on HDFC Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
<li className='cursor-pointer hover:bg-white hover:text-black hover:rounded-xl'>
Bank Offer 5% off on BOB Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
<li className='cursor-pointer hover:bg-white hover:text-black hover:rounded-xl'>
Bank Offer 5% off on SBI Bank Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above</li>
</div>
                      </ul>
            </div>
         </div>
         <div className='flex w-fit ml-[600px] mt-[2px] mb-2 '>
            <img src={item.images[0]} className=' rounded-xl hover:border border-yellow-500 mr-2 h-[100px] w-[160px] ' alt="loading" />
            <img className=' rounded-xl hover:border border-yellow-500 mr-2 h-[100px] w-[160px]' src={item.images[1]} alt="loading" />
            <img className=' hover:border border-yellow-500 mr-2 rounded-xl h-[100px] w-[160px]' src={item.images[2]} alt="loading" />
         </div>
         <UserReviewCard rating="⭐4.3 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Done the J0b"/>
         <UserReviewCard rating="⭐3 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Suitable for kids"/>
         <UserReviewCard rating="⭐5 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Better than all the products at the same range"/>
         <UserReviewCard rating="⭐3.5 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Average experience"/>
         <UserReviewCard rating="⭐4.4 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/>
         {view ? null: <button onClick={()=>setView(!view)} className='font-Poppins ml-[805px] p-1 hover:text-blue-800'>All  Reviews</button>}
         {view ?<><UserReviewCard rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/><UserReviewCard rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/><UserReviewCard rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/><UserReviewCard rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/></>: null}
         <Footer/>
      </>
  )
}

export default SingleProductPage

