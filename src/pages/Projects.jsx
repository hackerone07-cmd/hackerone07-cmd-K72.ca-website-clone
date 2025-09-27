import React from 'react'
import Project from '../components/projects/Project'

const Projects = () => {
  return (
    <div className='p-4'>
      <div className=' pt-[42vh] '>
      <h1 className='font-[font2] uppercase text-[13vw]'>projets</h1>
    </div>
      <div>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  )
}

export default Projects
