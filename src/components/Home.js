import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
