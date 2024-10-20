import React from 'react'
import {motion} from "framer-motion"

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

var index = 1

const Contact = () => {
  return (
        <motion.div id = 'contact' className = 'max-width-[1040px] m-auto md:pl-20 p-4 py-16'
        variants = {fadeInAnimationVariants}
        initial = "initial"
        whileInView = "animate"
        viewport = {{
        once : true,
        }}
        custom = {index} 
        >
         <h1 className = 'py-4 text-4xl font-bold text-center text-[#cc5500]'> 
            Contact
         </h1>
         <form action = 'https://getform.io/f/bjjekqqb' method ="POST" encType = 'multipart/form-data'> 
         <div className = 'grid md:grid-cols-2 gap-4 w-full py-2'> 
            <div className = 'flex flex-col '> 
                <label className = 'uppercase text-sm py-2'>Name </label> 
                <input className = 'border-2 rounded-lg flex border-gray-300'  type = "text" name = 'name' /> 
            </div>
        <div className = 'flex flex-col'> 
                <label className = 'uppercase text-sm py-2'>Phone Number </label> 
                <input className = 'border-2 rounded-lg flex border-gray-300' type = "text" name = 'phone' />
        </div>
        </div>
        <div className = 'flex flex-col py-2'> 
                <label className = 'uppercase text-sm py-2'>Email </label> 
                <input className = 'border-2 rounded-lg flex border-gray-300' type = "email" name = 'email'/>
        </div> 
        <div className = 'flex flex-col py-2' > 
                <label className = 'uppercase text-sm py-2'>Subject </label> 
                <input className = 'border-2 rounded-lg p-3 flex border-gray-300' type = "text" name = 'subject'/>
        </div> 
        <div className = 'flex flex-col py-2'> 
                <label className = 'uppercase text-sm py-2'>Message</label> 
                <textarea className = 'border-2 rounded-lg p-3 flex border-gray-300'rows = '10' name = 'message'> </textarea>
        </div> 
            <button className = ' bg-[#cc5500] text-gray-100 mt-4 w-full p-4 rounded-xl'>
                Send Message
            </button>
         </form> 
    </motion.div>
  )
}

export default Contact