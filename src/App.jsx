import React from 'react'
import {About} from './components/About'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import {Contact}from './components/Contact'
import {Testimonails}from './components/Testimonails'
import {Footer} from './components/Footer'

export const App = () => {
  return (
    <div>
     
      <Header />
      <About />
      <Projects />
      <Testimonails />
       <Contact />
      <Footer />
     
    </div>
  )
}
