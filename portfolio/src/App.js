import React, { Component } from 'react';
import Header from './components/Header'
import Showcase from './components/Showcase'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <Portfolio />
      <About />
      <Contact />
    </div>
  )
}

export default App;
