import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/About'


function App() {
  return (
    <div>
      <Sidenav />
      <Main/> 
      <AboutMe />
      <Projects/>
      
      <Work />
    
      <Contact />  
    </div>
  )
}

export default App
