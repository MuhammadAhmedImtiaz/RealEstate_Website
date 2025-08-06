import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <div className='min-h-screen mg-4 bg-cover bg-center flex items-center w-full overflow-hidden 'style={{backgroundImage:"url('/header_img.png')"}} id='Header'>
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 medium:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore Home that fit your dreams        </h2>
        <div className='space-x-6 mt-16'> 
          <a href="#Projects" className='border border-white px-8 py-3 rounded '>Projects</a>
          <a href="#Contact" className='bg-blue-400 px-8 py-3 rounded '>Contact US</a>
        </div>
      </div>
    </div>
  )
}
