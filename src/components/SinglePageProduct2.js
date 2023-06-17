
/// New Design of the single product page.


import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import SinglePageProductShimmer from './SinglePageProductShimmer'
import Header from './Header'
import Footer from './Footer'
import UserReviewCard2 from './UserReviewCard2'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SinglePageProduct2 = () => {
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

    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }
   const handleToastClick=()=>{
    toast.success(`${item.title} has been added!!`,{
        position: toast.POSITION.TOP_RIGHT
    })
   }

    if(isloading===true) return <SinglePageProductShimmer/>
     
  return (
   <div className='bg-gray-200'>
    <Header/>
    <Navbar/>
    <div className='bg-gray-200 h-[500px] font-Poppins'>
        <div className='flex pt-3 ml-1 mr-1'>
            <div className='bg-white w-[200px] h-[300px] mr-2 pl-2'>
                <img className=' w-[180px] h-[90px] rounded-lg  mb-2 mt-2' src={item.images[2]} alt="loading" />
                <img className='w-[180px] h-[90px]  rounded-lg mb-2' src={item.images[3]}alt="loading" />
                <img className='w-[180px] h-[90px]  rounded-lg mb-2' src={item.images[1]} alt="loading" />
            </div>
            <div className='bg-white w-[550px] h-[300px] mr-2 text-center text-2xl font-bold p-2'>
                <div className='mb-1'>{item.title}</div>
                <div className='font-light text-xl mb-2'>{item.brand}</div>
                <img className='w-[400px] h-[200px] rounded-lg ml-[55px]' src={item.thumbnail} alt="loading" />
                </div>
            <div className='bg-white w-[300px] h-[300px] mr-2 text-center pt-11'>
                <div className='text-4xl font-bold mt-2 mb-2'>₹{((item.price)*81).toLocaleString()}.00</div>
                <div className='line-through font-light mt-2 mb-2'>₹{(((item.price)*81)/(1-item.discountPercentage/100)).toFixed(2).toLocaleString()}</div>
                <div className='font-semibold text-lg mt-2 mb-2'>{item.discountPercentage}%off</div>
                <div className='font-semibold text-lg mr-2 '>⭐{item.rating}</div>
                <div className='w-[150px] h-[30px] pt-1 rounded-lg text-center ml-[75px] mt-2 mb-2 font-semibold bg-black text-white'>{item.stock} left</div>
            </div>
            <div className='bg-white w-[200px] h-[300px] pt-[100px]'>
               <div className='w-[190px] ml-1 h-[35px] rounded-lg text-center text-md font-semibold text-white bg-orange-400 hover:bg-orange-600 mb-2'><button className='pt-1' onClick={()=>{
                handleAddToCart(item)
                handleToastClick()
                }}>ADD TO CART</button><ToastContainer className='w-[100px] h-[50px]'/></div>
               <Link to={'/buy?v='+item.id}><div className='w-[190px] ml-1 h-[35px] rounded-lg text-center bg-green-500 hover:bg-green-700 text-md text-white font-semibold ' ><button className='pt-1'>BUY NOW</button></div></Link> 
            </div>
        </div>
        <div className='mt-2 ml-2 mr-2 h-[150px] bg-white text-xl font-semibold text-center pt-5'>
            <div className='text-3xl font-bold mb-4'>{item.title}</div>
            <div>{item.description}</div>
            </div>
    </div>
    <div className='ml-2 mr-2 mb-4 bg-white'>
    <UserReviewCard2 rating="⭐4.3 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Done the Job"/>
         <UserReviewCard2 rating="⭐3 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Suitable for kids"/>
         <UserReviewCard2 rating="⭐5 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Better than all the products at the same range"/>
         <UserReviewCard2 rating="⭐3.5 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Average experience"/>
         <UserReviewCard2 rating="⭐4.4 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/>
         {view ? null: <button onClick={()=>setView(!view)} className='font-Poppins ml-[600px] p-1 hover:text-blue-800 font-bold'>All  Reviews</button>}
         {view ?<><UserReviewCard2 rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/><UserReviewCard2 rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/><UserReviewCard2 rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/><UserReviewCard2 rating="⭐4.9 Rating" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat sunt veritatis repudiandae sapiente autem laudantium cum at, nesciunt doloribus sequi? Praesentium officia quas aliquam amet accusamus aspernatur quo dolore. Blanditiis repellat consequatur autem culpa doloremque animi mollitia et? Nisi corporis, blanditiis veritatis, corrupti maxime a pariatur voluptas atque unde itaque voluptatum, consectetur labore facere. Adipisci molestiae nihil provident ullam necessitatibus similique, obcaecati nesciunt harum, iure corrupti excepturi debitis, officiis optio consectetur earum ut officia?" head="Gaming is not fine but screen looks decent"/></>: null}

    </div>
    <Footer/>
   </div>
  )
}

export default SinglePageProduct2