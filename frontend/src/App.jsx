import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../src/assets/styles/app.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Travel from './pages/Travel';
function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path= '/signup' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/travel' element={<Travel/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
