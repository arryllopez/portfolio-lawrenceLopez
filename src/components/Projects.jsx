import React from 'react'
import ProjectItem from './ProjectItem'
import comingSoon from '../assets/comingSoon.jpg'
import DateNet from '../assets/dateNetSS.png'
import {motion} from 'framer-motion'

//initialize index values for staggered animation
var index3 = 1
var index4 = 2
var index5 = 3
var index6 = 4
var index7 = 5




const fadeInAnimationVariants = 
{ 
  initial : {
    opacity : 0,
    x:100
  },
  animate :  (index) => ({
    opacity : 1,
    x : 0,
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
          <ProjectItem img = {DateNet} title = 'DateNet' link="https://github.com/arryllopez/DateNet"/>
          
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
          <ProjectItem img = {comingSoon} title = 'Coming Soon' link="/projects/coming-soon-1"/> 
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
          <ProjectItem img = {comingSoon} title = 'Coming Soon' link="/projects/coming-soon-2"/>
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
          <ProjectItem img = {comingSoon} title = 'Coming Soon' link="/projects/coming-soon-3"/> 
          </motion.div>
          </div> 
          
    </div>
  )
}

export default Projects

