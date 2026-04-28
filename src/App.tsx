import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Team from "./components/Team";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";

const App: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9] text-[#1b1b1b] font-sans overflow-x-hidden">
      <NavBar />
      <Hero />
      <Vision />
      <OurStory />
      <Team />
      {/*<CTA />*/}
      <Footer />
    </div>
  );
};

export default App;
