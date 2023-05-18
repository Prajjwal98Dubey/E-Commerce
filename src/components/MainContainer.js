import React from 'react'
import MainContainerShimmer from './MainContainerShimmer'

const MainContainer = () => {
  return (
    <>
     <div className='ml-16 flex flex-wrap'>
      {Array(20).fill("").map((e,index)=><div key={index}><MainContainerShimmer/></div>)}
     </div>
    </>
  )
}

export default MainContainer