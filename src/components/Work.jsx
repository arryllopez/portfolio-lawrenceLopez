import React from 'react'
import Workitem from './WorkItem'


const data = [
        {
            year: '2024' ,
            title : 'Crew Member',
            duration : 'June 2021 - August 2021',
            details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            year: '2020' ,
            title : 'Crew Member',
            duration : 'June 2021 - August 2021',
            details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            year: '2020' ,
            title : 'Crew Member',
            duration : 'June 2021 - August 2021',
            details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            year: '2020' ,
            title : 'Crew Member',
            duration : 'June 2021 - August 2021',
            details : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        
]

const Work = () => {
  return (
    <div id = 'work' className = 'max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className = 'text-4xl font-bold text-center text-[#001b5e]'>Work Experience</h1>
        {data.map((item,idx) => (
            <Workitem 
            key = {idx} 
            year = {item.year}
            title = {item.title}
            duration = {item.duration}
            details = {item.details} 
            />
        ))}
    </div>
  ) 
}

export default Work