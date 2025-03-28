import Header from "../Components/Header/Header";

import Footer from "../Components/Footer/Footer";

import ContentContact from "./ContentContact";
function Contact() {
  return (
    <>
      <div className="body flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Header />
        <ContentContact />
        <Footer />
      </div>
    </>
  );
}
export default Contact;
