import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Team from "./components/Team";
import Footer from "./components/Footer";
import HowItWorksTeaser from "./components/HowItWorksTeaser";
import About from "./pages/About";

const Home: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9] text-[#1b1b1b] font-sans overflow-x-hidden">
      <NavBar />
      <Hero />
      <Vision />
      <HowItWorksTeaser />
      <Team />
      {/*<CTA />*/}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
