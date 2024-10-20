import React from 'react'
import {motion} from 'framer-motion'

var index8 = 8
var index9 = 9
var index10 = 10
var index11 = 11

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

const Workitem = ({year, title, duration, details}) => {
  return (
    <ol className = 'flex flex-col md:fex-row relative border-1 border-stone-200'> 
        <li className = 'mb-10 ml-4 py-4'> 
            <div className = 'absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
                <p className  ='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'> 
                    <motion.span 
                    className = 'inline-block px-2 py-1 font-semibold text-white bg-[#cc5500] rounded-md'
                    variants = {fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                    viewport = {{
                    once : true,
                    }}
                    custom = {index8}
                    >{year} </motion.span> 
                    <motion.span className = 'text-lg font-semibold text-[#cc5500]'
                    variants = {fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                     viewport = {{
                       once : true,
                     }}
                     custom = {index9}
                    >{title} </motion.span> 
                    <motion.span className = 'my-1 text-sm font-nomrla leading-none text-stone-400'
                      variants = {fadeInAnimationVariants}
                      initial = "initial"
                      whileInView = "animate"
                       viewport = {{
                         once : true,
                       }}
                       custom = {index10}
                    >{duration} </motion.span> 
                </p>
                <p> 
                <motion.span className = 'my-2 text-base font-normal text-stone-500'
                   variants = {fadeInAnimationVariants}
                   initial = "initial"
                   whileInView = "animate"
                    viewport = {{
                      once : true,
                    }}
                    custom = {index11}
                >{details}</motion.span> 
                </p>
        </li>
    </ol>
  )
}

export default Workitem