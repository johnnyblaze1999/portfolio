import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default App
