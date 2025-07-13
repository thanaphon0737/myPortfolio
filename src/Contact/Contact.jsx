import Header from "../Components/Header/Header";

import Footer from "../Components/Footer/Footer";

import ContentContact from "./ContentContact";

import Ballpit from "../Components/ReactBits/Ballpit";
function Contact() {
  return (
    <>
      <div
       className="bg-gradient-to-br from-gray-900 to-black "
        style={{
          position: "fixed",
          overflow: "hidden",
          
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Ballpit
          count={50}
          gravity={0.5}
          friction={0.988}
          wallBounce={0.95}
          followCursor={false}
          ambientColor={16777215}
        />
      </div>
      <div className="body flex flex-col min-h-screen text-white relative z-10 pointer-events-none [&>*]:pointer-events-auto">
        <Header />
        <ContentContact />
        <Footer />
      </div>
    </>
  );
}
export default Contact;
