import React from 'react'

const Project = () => {


   const project = ['../../pages/2.jpg','../../pages/3.jpg','../../pages/4.jpg','../../pages/5.jpg']

  return (
    <div>
        
    <div className='w-full h-[500px] flex gap-4 mb-4 '>
      <div className='w-1/2 group h-full rounded-none relative transition-all hover:rounded-[50px] overflow-hidden bg-green-400'>
       <img className='  h-full w-full object-cover' src="/src/pages/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
       <div className='absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 flex items-center justify-center bg-black/20 h-full w-full'>
        <h2 className='uppercase text-5xl font-[font1] pt-3 px-5 py-2 text-white border-white border-4 rounded-full'>vior le projet</h2>
       </div>
      </div>
     
    <div className='w-1/2 group h-full rounded-none relative transition-all hover:rounded-[50px] overflow-hidden bg-green-400'>
       <img className='  h-full w-full object-cover' src="/src/pages/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
       <div className='absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 flex items-center justify-center bg-black/20 h-full w-full'>
        <h2 className='uppercase text-5xl font-[font1] pt-3 px-5 py-2 text-white border-white border-4 rounded-full'>vior le projet</h2>
       </div>
     
     
    </div>
  </div>

    </div>
  )
}

export default Project
