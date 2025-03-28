import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import MyworkContent from "./MyworkContent"
function Mywork() {
  return (
    <>
      <div className="body flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Header />
        <MyworkContent />
        <Footer />
      </div>
    </>
  )
}
export default Mywork