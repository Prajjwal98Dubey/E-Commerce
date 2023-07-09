import React from 'react'

const UserReviewCard2 = ({rating,head,desc}) => {
  return (
    <div className=''>
    <div className='border border-gray-300  font-Poppins  p-1'>
        <ul className='flex'>
            <div className=' w-full text-center'>
            <li className=''>{rating}</li>
            <li className='ml-4 font-semibold '>{head}</li>
            </div>
        </ul>
        <div className='mt-2'>
        {desc}
        </div>
     </div>
    </div>
  )
}

export default UserReviewCard2