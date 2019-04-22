import React, { Component } from 'react';
import Header from './components/Header'
import Showcase from './components/Showcase'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer.js'


function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
