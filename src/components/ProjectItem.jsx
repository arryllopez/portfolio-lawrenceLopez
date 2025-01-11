import React from 'react'

const ProjectItem = ({img, title, link}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#cc5500] hover:scale-105 transition-all duration-300 ease-in-out">
      <img 
        src={img} 
        alt={title} 
        className="rounded-xl group-hover:opacity-10 object-cover w-full h-[250px]" 
      />
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 p-4">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center mb-4">
          {title}
        </h3>
        <a 
          href={link} 
          className="px-6 py-3 bg-white text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 ease-in-out"
        >
          More Info
        </a>
        <p> 
        
        </p>
      </div>
    </div>
  )
};

export default ProjectItem

