import React from 'react'
import {About} from './components/About'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import {Contact}from './components/Contact'
import {Testimonails}from './components/Testimonails'
import {Footer} from './components/Footer'
import { ToastContainer } from 'react-toastify';
export const App = () => {
  return (
    <div className='w-full overflow-hidden'>
     <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonails />
       <Contact />
      <Footer />
     
    </div>
  )
}
