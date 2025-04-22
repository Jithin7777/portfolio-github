import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
    </div>
  )
}

export default App