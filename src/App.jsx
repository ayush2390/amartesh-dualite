import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewArrivalsSection from "./components/NewArrivalsSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import CraftsSection from "./components/CraftsSection";
import Texture from "./components/Texture";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact";
import Collection from "./components/Collection";

function App() {
  return (
    <div className="w-[100%]">
        <Navbar />
       <HeroSection />   
      <Collection />
        <Texture />
       <NewArrivalsSection />
      <CraftsSection />
      <TestimonialSection />
      <ContactUs />
       <FAQSection />
      <Footer />     
    </div>
  );
}

export default App;
