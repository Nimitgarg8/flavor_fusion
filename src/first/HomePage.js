import React from 'react'
import First from './First'
import Navbar from './Navbar'
import Menu from './menu'
import About from './About'
import Gallery from './Gallery'
import Footer from './footer';

function HomePage() {
  return (
    <>
        <First/>
        <Navbar/>
        <Menu/>
        <About/>
        <Gallery/>
        <Footer/>
    </>
  )
}

export default HomePage
