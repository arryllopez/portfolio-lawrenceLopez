import React from 'react'
import ProjectItem from './ProjectItem'

import comingSoon from '../assets/comingSoon.jpg'

const Projects = () => {
  return (
    <div id = 'projects' className  = 'max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1 className = 'text-4xl font-bold text-center text-[#cc5500]'>Projects</h1> 
        <div className = 'grid sm:grid-cols-2 gap-12 m:grid-col py-8'>
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          </div> 
    </div>
  )
}

export default Projects