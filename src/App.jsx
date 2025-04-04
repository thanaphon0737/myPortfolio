import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import useRef from 'react'
function App() {


  return (
    <>
      <div className="body flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white scroll-smooth">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
