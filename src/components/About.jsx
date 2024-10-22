import React from 'react'
import {motion} from 'framer-motion'
import ComingSoon from '../assets/comingSoon.jpg'

//initializing index values for framer motion staggered animation
var index = 1
var index2 = 2
var index3 =3 
var index4 = 4

 
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
      className = 'text-align:center py-8'> 
      Hello, my name is Lawrence Arryl Lopez. I am a second-year Software Engineering student at Ontario Tech University, who is very passionate about technology and problem-solving. 
      I thoroughly enjoy coding computer software and I love the challenge of modifying and programming pieces of technological hardware. 
      Moreover, when I am not immersed in tech, you can find me on the basketball court, strategizing over a game of chess, or enjoying the outdoors through fishing and cycling. 
      Throughout my everyday life, I always seek new opportunities to broaden my knowledge about coding and to tackle new exciting projects!
      </motion.p> 

      <div className = 'grid sm:grid-cols-2 gap-12 m:grid-col py-8'>
        <motion.div
        variants = {fadeInAnimationVariants}
        initial = "initial"
        whileInView = "animate"
        viewport = {{
          once : true,
        }}
        custom = {index3}
        > 
        <motion.img className = 'rounded-xl group-hover:opacity-10 shadow-xl shadow-gray-400 hover:scale-105' src = {ComingSoon} alt = "/" />
        </motion.div>
        <motion.div
        variants = {fadeInAnimationVariants}
        initial = "initial"
        whileInView = "animate"
         viewport = {{
           once : true,
         }}
         custom = {index4}
        > 
        <motion.img className = 'rounded-xl group-hover:opacity-10 shadow-xl shadow-gray-400 hover:scale-105' src = {ComingSoon} alt = "/" />
        </motion.div> 
      </div> 
    </div>
  )
}

export default aboutMe