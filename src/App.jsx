import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import useRef from "react";
import Particles from "./Components/ReactBits/Particles";
function App() {
  return (
    <>
      <div
      className="bg-gradient-to-br from-gray-900 to-black "
        style={{
          position: "fixed", // Stick it to the viewport
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // Send it to the background
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={30}
          speed={0.7}
          particleBaseSize={300}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="body flex flex-col min-h-screen text-white scroll-smooth relative z-10 pointer-events-none [&>*]:pointer-events-auto">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
