import React from 'react'

const SearchShimmer = ({element}) => {
  return (
    <>
     <div className='flex flex-col items-center text-3xl font-bold font-Poppins mt-4'>Search result for "{element}"...</div>
    <div className='ml-6 animate-pulse mb-4'>
      <div className='flex ml-16 mt-5'>
        <div className='w-[300px] h-[145px] bg-gray-300 rounded-lg'></div>
        <div className='ml-2'>
          <div className='w-[700px] h-[15px] mt-4 rounded-lg bg-gray-300'></div>
          <div className='w-[500px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
          <div className='w-[300px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
          <div className='w-[100px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      <div className='flex ml-16 mt-5'>
        <div className='w-[300px] h-[145px] bg-gray-300 rounded-lg'></div>
        <div className='ml-2'>
          <div className='w-[700px] h-[15px] mt-4 rounded-lg bg-gray-300'></div>
          <div className='w-[500px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
          <div className='w-[300px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
          <div className='w-[100px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      <div className='flex ml-16 mt-5'>
        <div className='w-[300px] h-[145px] bg-gray-300 rounded-lg'></div>
        <div className='ml-2'>
          <div className='w-[700px] h-[15px] mt-4 rounded-lg bg-gray-300'></div>
          <div className='w-[500px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
          <div className='w-[300px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
          <div className='w-[100px] h-[15px] mt-3 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default SearchShimmer