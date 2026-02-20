import './index.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
        <div className={`absolute top-0 z-[-2] h-screen w-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}></div>
        <div className={`absolute top-0 z-[-1] h-screen w-screen ${isDarkMode ? 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]' : 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),transparent)]'}`}></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
        <Footer />
      </div>
      <div className="cursor"></div>
    </div>
  );
};

export default App;
