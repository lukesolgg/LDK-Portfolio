import './index.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Footer from './components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed to true for default dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      document.documentElement.style.setProperty('--cursor-x', `${clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDarkMode ? 'dark bg-black text-white' : 'bg-white text-black'} antialiased selection:bg-cyan-300 selection:text-cyan-900`}>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className={`absolute top-0 z-[-2] h-screen w-screen ${isDarkMode ? 'bg-[radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(29,78,216,1) 100%)]' : 'bg-[radial-gradient(circle, rgba(29,78,216,1) 0%, rgba(0,0,0,1) 100%)]'}`}></div>
        <div className={`absolute top-0 z-[-1] h-screen w-screen ${isDarkMode ? 'bg-[radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)]' : 'bg-[radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%)]'}`}></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
        <Footer />
      </div>
      {/* Cursor effect */}
      <div className="cursor"></div>
    </div>
  );
};

export default App;