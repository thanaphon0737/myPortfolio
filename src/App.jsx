import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
function App() {


  return (
    <>
      <div className="body flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
