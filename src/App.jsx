import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" scroll-smooth">
      <Navbar />
      <div className="mx-w-7xl mx-auto pt-8 lg:pt-12 px-6">
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
