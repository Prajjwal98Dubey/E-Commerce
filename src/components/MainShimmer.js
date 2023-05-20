import React from 'react'
import MainContainerShimmer from './MainContainerShimmer'

const MainShimmer = () => {
  return (
    <>
    {Array(20).fill("").map((e,index)=><div key={index}><MainContainerShimmer/></div>)}
    </>
  )
}

export default MainShimmer