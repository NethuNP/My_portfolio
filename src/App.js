import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skils from './components/Skils'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skils/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App