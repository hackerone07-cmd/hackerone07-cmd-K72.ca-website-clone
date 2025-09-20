import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomtext = () => {
  return (
    <div className='flex items-center justify-center text-white font-[font2] gap-4 '>
      <div className='border-3 h-24 hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw]  mt-6' to='/projects' >Projets</Link>
      </div>
      <div className='border-3 h-24 hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw]  mt-6' to='/agence'>Agence</Link></div>    
      </div>
  )
}
export default HomeBottomtext
