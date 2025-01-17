import './index.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { motion } from "motion/react";

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(circle, rgba(29,78,216,1) 0%, rgba(0,0,0,1) 100%)]"></div>
        <div className="absolute top-0 z-[-1] h-screen w-screen bg-[radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
};

export default App;