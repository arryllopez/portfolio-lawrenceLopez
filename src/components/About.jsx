import React from 'react'
import {motion} from 'framer-motion'

//initializing index values for framer motion staggered animation
var index = 1
var index2 = 2
 
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


const aboutMe = () => {
  return (
    <div id = 'about' className  = 'max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
  
      <motion.h1 
      className = 'text-4xl font-bold text-center text-[#cc5500]'
      variants = {fadeInAnimationVariants}
      initial = "initial"
      whileInView = "animate"
       viewport = {{
         once : true,
       }}
       custom = {index}
      > About Me </motion.h1>

      <motion.p 
       variants = {fadeInAnimationVariants}
       initial = "initial"
       whileInView = "animate"
        viewport = {{
          once : true,
        }}
        custom = {index2}
      className = 'text-align:left py-8'> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m
      </motion.p> 
    </div>
  )
}

export default aboutMe