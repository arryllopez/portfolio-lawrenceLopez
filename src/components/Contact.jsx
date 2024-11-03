import React from 'react'
import {motion} from "framer-motion"

var index = 1 
var index2 = 2
var index3 = 3
var index4 = 4
var index5 = 5
var index6 = 6

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


const Contact = () => {
  return (
        <div id = 'contacts'>
         <motion.h1 
         variants = {fadeInAnimationVariants}
         initial = "initial"
         whileInView = "animate"
          viewport = {{
            once : true,
          }}
          custom = {index}
          className = 'py-4 text-4xl font-bold text-center text-[#cc5500]'> 
            Contact
         </motion.h1>
         <form action = 'https://getform.io/f/bjjekqqb' method ="POST" encType = 'multipart/form-data'> 
         <div className = 'grid md:grid-cols-2 gap-4 w-full py-2'> 
            <motion.div 
            variants = {fadeInAnimationVariants}
            initial = "initial"
            whileInView = "animate"
             viewport = {{
               once : true,
             }}
             custom = {index2}
            className = 'flex flex-col '> 
                <label className = 'uppercase text-sm py-2'>Name </label> 
                <input className = 'border-2 rounded-lg flex border-gray-300'  type = "text" name = 'name' /> 
            </motion.div>
        <motion.div className = 'flex flex-col' 
                variants = {fadeInAnimationVariants}
                initial = "initial"
                whileInView = "animate"
                viewport = {{
                once : true,
                }}
                custom = {index3}
                >     
                <label className = 'uppercase text-sm py-2'>Phone Number </label> 
                <input className = 'border-2 rounded-lg flex border-gray-300' type = "text" name = 'phone' />
        </motion.div>
        </div>
        <motion.div 
        variants = {fadeInAnimationVariants}
        initial = "initial"
        whileInView = "animate"
         viewport = {{
           once : true,
         }}
         custom = {index4}
        className = 'flex flex-col py-2'> 
                <label className = 'uppercase text-sm py-2'>Email </label> 
                <input className = 'border-2 rounded-lg flex border-gray-300' type = "email" name = 'email'/>
        </motion.div> 
        <motion.div 
        variants = {fadeInAnimationVariants}
        initial = "initial"
        whileInView = "animate"
         viewport = {{
           once : true,
         }}
         custom = {index5}
        className = 'flex flex-col py-2' > 
                <label className = 'uppercase text-sm py-2'>Subject </label> 
                <input className = 'border-2 rounded-lg p-3 flex border-gray-300' type = "text" name = 'subject'/>
        </motion.div> 
        <motion.div 
        variants = {fadeInAnimationVariants}
        initial = "initial"
        whileInView = "animate"
         viewport = {{
           once : true,
         }}
         custom = {index6}
        className = 'flex flex-col py-2'> 
                <label className = 'uppercase text-sm py-2'>Message</label> 
                <textarea className = 'border-2 rounded-lg p-3 flex border-gray-300'rows = '10' name = 'message'> </textarea>
        </motion.div> 
            <button className = ' bg-[#cc5500] text-gray-100 mt-4 w-full p-4 rounded-xl'>
                Send Message
            </button>
         </form> 
    </div>
  )
}

export default Contact