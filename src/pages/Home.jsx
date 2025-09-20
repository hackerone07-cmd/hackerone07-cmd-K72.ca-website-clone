import React from 'react'
import Video from "../components/home/Video"
import Hometext from '../components/home/Hometext'
import HomeBottomtext from '../components/home/HomeBottomtext'
const Home = () => {
  return (
    <div className=''>
      <div className=' h-screen w-screen fixed'>
            <Video />
      </div>
      <div className='h-screen w-screen pb-5 overflow-hidden relative justify-between flex flex-col'>
        <Hometext/>
        <HomeBottomtext/>
      </div>
    </div>
  )
}

export default Home
