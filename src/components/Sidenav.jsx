import React, {useState} from 'react'
import {IconHome, IconBriefcase2, IconLayoutGrid, IconMail, IconMenu, IconUser} from '@tabler/icons-react'

const Sidenav = () => {
    const [nav,setNav] = useState(false)
    //toggle the state of nav
    const handleNav = () => {
        setNav(!nav)
    }
    
  return (
    <div>
        <IconMenu onClick = {handleNav} className='absolute top-4 right-4 z-[99] md:hidden' /> 
        {
            nav ? (
                <div className = 'fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick = {handleNav} href = "#main" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                    <IconHome size = {20}/> 
                    <span className ='pl-4'>Home</span> 
                    </a>
                    <a onClick = {handleNav}  href = "#about" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                    <IconUser size = {20}/> 
                    <span className ='pl-4'>About </span> 
                    </a>
                    <a onClick = {handleNav}  href = "#projects" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                    <IconBriefcase2 size = {20}/> 
                    <span className ='pl-4'>Projects</span> 
                    </a>
                    <a onClick = {handleNav}  href = "#work" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
                        <IconLayoutGrid size = {20}/> 
                        <span className ='pl-4'>Experience</span> 
                    </a>
                    <a onClick = {handleNav}  href = "#contact" className = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gradient-to-r from-yellow-100 to-red-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200'> 
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
                    <a href = "#about" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconUser size ={20} /> 
                    </a>
                    <a href = "#projects" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconBriefcase2 size ={20} /> 
                    </a>
                    <a href = "#work" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconLayoutGrid size ={20} /> 
                    </a>  
                    <a href = "#contacts" className = 'outline outline-offset-0 outline-black-100 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <IconMail size ={20} /> 
                    </a> 
                </div>
            </div>



    
    </div>
  ) 
}

export default Sidenav