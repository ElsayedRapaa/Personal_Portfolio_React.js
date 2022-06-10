import React from "react";

// Components
import Header from "./Component/Header/Header";
import Nav from "./Component/Navbar/Nav";
import About from "./Component/About/About";
import Experiance from "./Component/Experiance/Experiance";
import Services from "./Component/Services/Services";
import Portfolio from "./Component/Portfolio/Portfolio";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
