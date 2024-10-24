import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import { Route, Routes } from 'react-router-dom'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
