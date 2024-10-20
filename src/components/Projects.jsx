import React from 'react'
import ProjectItem from './ProjectItem'
import comingSoon from '../assets/comingSoon.jpg'
import {motion} from 'framer-motion'

//initialize index values for staggered animation
var index3 = 3
var index4 = 4
var index5 = 5
var index6 = 6
var index7 = 7

const fadeInAnimationVariants = 
{ 
  initial : {
    opacity : 0,
    y:100
  },
  animate :  (index) => ({
    opacity : 1,
    y : 0,
    transition : {
    delay : 0.05 * index,
    },
  }),
}

const Projects = () => {
  return (
    <div id = 'projects' className  = 'max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <motion.h1 
        className = 'text-4xl font-bold text-center text-[#cc5500]'
        variants = {fadeInAnimationVariants}
        initial = "initial"
        whileInView = "animate"
         viewport = {{
           once : true,
         }}
         custom = {index3}
        >Projects</motion.h1> 

        <div className = 'grid sm:grid-cols-2 gap-12 m:grid-col py-8'>
          <motion.div
           variants = {fadeInAnimationVariants}
           initial = "initial"
           whileInView = "animate"
            viewport = {{
              once : true,
            }}
            custom = {index4}
          > 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/>
          </motion.div> 
          <motion.div
           variants = {fadeInAnimationVariants}
           initial = "initial"
           whileInView = "animate"
            viewport = {{
              once : true,
            }}
            custom = {index5}
          > 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          </motion.div>
          <motion.div
          variants = {fadeInAnimationVariants}
          initial = "initial"
          whileInView = "animate"
           viewport = {{
             once : true,
           }}
           custom = {index6}
          > 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/>
          </motion.div> 
          <motion.div
           variants = {fadeInAnimationVariants}
           initial = "initial"
           whileInView = "animate"
            viewport = {{
              once : true,
            }}
            custom = {index7}
          > 
          <ProjectItem img = {comingSoon} title = 'Coming Soon'/> 
          </motion.div>
          </div> 
          
    </div>
  )
}

export default Projects