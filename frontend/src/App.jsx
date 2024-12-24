import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../src/assets/styles/app.css'
function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path= '/signup' element={<Signup/>}/>
          <Route path='/home' element={<Hero/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
