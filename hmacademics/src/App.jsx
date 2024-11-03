import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/homepage'
import Contact from './pages/contact'

function App() {

  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>

      
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
