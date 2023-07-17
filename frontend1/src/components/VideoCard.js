import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ products }) => {
  return (
    <>
      <Link to={'/singleproductpage?v=' + products.id}>
        <div className='w-[350px] h-[350px] rounded-lg mx-4 my-2 border border-white hover:shadow-lg hover:border border-gray-400 cursor-pointer hover:shadow-blue-200'>
          <img className='w-[383px] h-[170px] rounded-md ' src={products.thumbnail} alt="loading..." />
          <div className='text-2xl text-center'>{products.title}</div>
          <div className='text-xl text-center font-thin'>{products.description}</div>
          <ul className='flex justify-around'>
            <li className='border border-gray-400 bg-gray-400 rounded-lg text-white text-[14px] w-[60px] text-center'>₹{((products.price) * 81).toLocaleString()}</li>
            <li className='border border-green-600 bg-green-600 rounded-lg text-white text-[14px] '> ⭐{(products.rating).toFixed(1)}</li>
            <li className='border border-red-600 bg-red-700 rounded-lg text-[14px] text-white text-center'>{(products.discountPercentage).toFixed(1)}% off</li>
          </ul>
        </div>
      </Link>
    </>
  )
}
// This is the higher oreder function. Higher Order Functions generally takes in a component and return a component.
// export const AdShower = ({ products }) => {
//   return (
//     <>
//       <div className='border border-x-black'>
//         <VideoCard products={products} />
//         <div>ad</div>
//       </div>

//     </>
//   )

// }

export default VideoCard