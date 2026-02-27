import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import AppRouter from './components/AppRouter'
import Footer from './components/footer'


//Link permet de changeer d'URL sans recharger la page

function App() {

  return (
    <>

      <BrowserRouter>
          <Navbar />
          <main className="content-wrapper">
            <AppRouter />
          </main>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
