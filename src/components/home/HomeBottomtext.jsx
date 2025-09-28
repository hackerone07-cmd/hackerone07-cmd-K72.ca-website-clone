import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomtext = () => {
  return (
    <div className='flex items-center justify-center text-white font-[font2] gap-4 '>
      <div className='lg:border-3 border-2 lg:h-24 h-11 hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center px-3 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw]  lg:mt-2' to='/projects' >Projets</Link>
      </div>
      <div className='lg:border-3 border-2 lg:h-24 h-11 hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center px-3 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw]  lg:mt-2' to='/agence'>Agence</Link></div>    
      </div>
  )
}
export default HomeBottomtext
