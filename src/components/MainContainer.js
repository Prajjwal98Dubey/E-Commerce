import React, { useEffect, useState } from 'react'
import VideoContainer from './VideoContainer'
import { COUR_IMG1, COUR_IMG2, COUR_IMG3, COUR_IMG4 } from './constants'

const MainContainer = () => {
  const arr = [COUR_IMG1, COUR_IMG2, COUR_IMG3, COUR_IMG4]
  const [count, setCount] = useState(0)
  
  const handleLeftClick=()=>{
    const lastIndex = arr.length - 1;
    const shouldResetIndex = count === 0;
    const index = shouldResetIndex ? lastIndex : count - 1;
    setCount(index);
    
  }
   const handleRightClick=()=>{
    const lastIndex = arr.length - 1;
    const shouldResetIndex = count === lastIndex;
    const index = shouldResetIndex ? 0 : count + 1;
    setCount(index);

   }
  return ( 
    <>
      <div className='overflow-hidden'>
        <div className='ml-8 mt-2 w-[1200px] h-[200px] overflow'><img src={arr[count]} alt="loading" /></div>
        <div className='flex justify-between'>
          <div className='hover:cursor-pointer'><svg onClick={handleLeftClick} clipRule="evenodd" width="100px" height="100px" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 2c5.518 0 9.997 4.48 9.997 9.998 0 5.517-4.479 9.997-9.997 9.997s-9.998-4.48-9.998-9.997c0-5.518 4.48-9.998 9.998-9.998zm-1.523 6.21s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fillRule="nonzero" /></svg></div>
          <div className='hover:cursor-pointer'><svg onClick={handleRightClick} width="100px" height="100px" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg></div>
        </div>
      </div>
      <div className='ml-16 flex flex-wrap'>
        <VideoContainer />
      </div>
    </>
  )
}

export default MainContainer