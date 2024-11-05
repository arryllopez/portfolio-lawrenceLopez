import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin} from '@tabler/icons-react'


const Main = () => {
  return (
    <div id = 'main'> 
        <img className = 'w-full h-screen object-cover object-left' src = "https://i.pinimg.com/originals/38/95/94/38959421cca2d9037f6eeef232d3654a.jpg" alt = ''/>
        <div className = 'w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className = 'max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'> 
            <h1 className = 'sm:text-5xl text-4xl font-bold text-gray-800 '> I'm Lawrence Lopez </h1>
            <h2 className = 'flex sm:text-3xl text-2xl pt-4 text-gray-800'> I'm a
            <TypeAnimation
              sequence={[
                'Developer',
                2000, 
                'Software Engineering Student',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft : '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className = 'flex justify-between pt-6 max-w-[200px] w-full'> 
            <a href = "https://github.com/arryllopez"> <IconBrandGithub className = 'cursor-pointer hover:scale-110'  size = {30} />  </a>
            <IconBrandInstagram className = 'cursor-pointer hover:scale-110' size = {30} /> 
            <IconBrandLinkedin className = 'cursor-pointer hover:scale-110'  size = {30} />
          </div> 
        </div>
      </div> 
    </div>
  )
}

export default Main