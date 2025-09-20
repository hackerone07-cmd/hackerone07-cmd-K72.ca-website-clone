import React from 'react'
import Hometext from './Hometext'
import HomeBottomtext from './HomeBottomtext'

const Video = () => {
  return (
    <div>
   <video
     style={{ borderRadius: "1rem" }}
  
  className="h-full w-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  src="/public/83c745cf.mp4"
/>
      
    </div>
  )
}

export default Video
