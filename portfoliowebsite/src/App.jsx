// import React from 'react'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import HomePage from './page/HomePage/HomePage'
import PortfolioPage from './page/PortfolioPage/PortfolioPage' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
