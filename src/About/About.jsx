import Header from "../Components/Header/Header"
import AboutContent from "./AboutContent"
import Footer from "../Components/Footer/Footer"
function About() {
  return (
    <>
      <div className="body flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Header />
        <AboutContent />
        <Footer />
      </div>
    </>
  )
}
export default About