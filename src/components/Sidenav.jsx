import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'
//importing different icons
import {IconHome, IconClipboardData, IconBriefcase2, IconLayoutGrid, IconMail} from '@tabler/icons-react'

const Sidenav = () => {
    const [nav,setNav] = useState(false)
    //toggle the state of nav
    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div>
        <AiOutlineMenu onClick = {handleNav} className='absolute top-4 right-4 z-[99] md:hidden' /> 
        {
            nav ? (
                <div className = 'fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a href = "#main" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                        <IconHome size = {20}/> 
                        <span className ='pl-4'>Home</span> 
                    </a>
                    <a href = "#work" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                        <IconLayoutGrid size = {20}/> 
                        <span className ='pl-4'>Experience</span> 
                    </a>
                    <a href = "#projects" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                        <IconBriefcase2 size = {20}/> 
                        <span className ='pl-4'>Projects</span> 
                    </a>
                    <a href = "#resume" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                        <IconClipboardData size = {20}/> 
                        <span className ='pl-4'>Resume</span> 
                    </a>
                    <a href = "#contact" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                        <IconMail size = {20}/> 
                        <span className ='pl-4'>Contact </span> 
                    </a>
                </div> 
            ) 
            : (
                '' //empty string
             )
        }
            <div className = 'md:block hidden fixed top-[25%] z-10'> 
                <div className = 'flex flex-col'>
                    <a href = "#main" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-black-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconHome size ={20} /> 
                    </a> 
                    <a href = "#work" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconLayoutGrid size ={20} /> 
                    </a> 
                    <a href = "projects" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconBriefcase2 size ={20} /> 
                    </a> 
                    <a href = "#resume" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconClipboardData size ={20} /> 
                    </a> 
                    <a href = "#contact" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconMail size ={20} /> 
                    </a> 
                </div>
            </div>



    
    </div>
  ) 
}

export default Sidenav