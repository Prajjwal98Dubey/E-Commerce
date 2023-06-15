import React, { useEffect } from 'react'

const PayOut = () => {
    useEffect(()=>{
        setTimeout(()=>{
          window.location.replace('http://localhost:3000')
        },2000)
    })
  return (
    <>
    <div className=' mt-[250px] flex flex-col items-center justify-center'>
        <div className='text-4xl font-Poppins font-extrabold'>
            Waiting for the <span className='text-green-600'>"SSL"</span> Certificate
            <div className='font-md text-xl'>Redirecting to Main Page...</div>
        </div>
    </div>
    </>
  )
}

export default PayOut