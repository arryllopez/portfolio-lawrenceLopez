import React from 'react'
import ProjectItem from './ProjectItem'

import comingSoon from '../assets/comingSoon.jpg'

const Projects = () => {
  return (
    <div id = 'projects' className  = 'max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1 className = 'text-4xl font-bold text-center text-[#cc5500]'>Projects</h1> 
        <p className = 'text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className = 'grid sm:grid-cols-2 gap-12 m:grid-col'>
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          </div> 
    </div>
  )
}

export default Projects