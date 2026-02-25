import { useState } from 'react'
import './App.css'

//Les imports pour Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


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
          <div className="content-wrapper">
            <AppRouter />
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
