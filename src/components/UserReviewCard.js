import React from 'react'

const UserReviewCard = ({rating,head,desc}) => {
  return (
     <>
     <div className='border border-black w-[750px] font-Poppins ml-[500px] p-1'>
        <ul className='flex'>
            <li>{rating}</li>
            <li className='ml-4'>{head}</li>
        </ul>
        <div className='mt-2'>
        {desc}
        </div>
     </div>
     </>
  )
}

export default UserReviewCard