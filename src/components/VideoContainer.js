import React, { useEffect, useState } from 'react'
import MainShimmer from './MainShimmer'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        getVideos()
    },[])

   const getVideos=async()=>{
    const data = await fetch('https://dummyjson.com/products')
    const json = await data.json()
    setVideos(json.products)
    setLoading(false)
   }
  if(loading===true) return <MainShimmer/>
  return (
    <>
      {videos.map((video)=><VideoCard key={video.id} products={video} />)}
    </>
  )
}

export default VideoContainer