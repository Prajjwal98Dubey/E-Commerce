import React, { useEffect, useState } from 'react'
import MainShimmer from './MainShimmer'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [paginate, setPaginate] = useState(9)
  const [productCount, setProductCount] = useState(0)
  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=100')
    const json = await data.json()
    setVideos(json.products)
    setLoading(false)
    setProductCount((json.products).length)
  }
  const handlePagination = () => {
    setPaginate((preValue) => preValue + 9)
  }
  if (loading === true) return <MainShimmer />
  return (
    <>
      {videos.slice(0, paginate).map((video) => <VideoCard key={video.id} products={video} />)}
      { productCount > paginate ? <button className='mt-[10px] border border-blue-500 bg-blue-500 text-white w-[200px] h-[30px] mb-[10px] ml-[500px] rounded-xl' onClick={() => handlePagination()}>Load More...</button> : null}
    </>
  )
}

export default VideoContainer