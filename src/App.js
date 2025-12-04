import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Roles to show in the hero card
const heroRoles = [
  "Full Stack Web Developer",
  "SEO Specialist",
  "Video Editor",
  "Social Media Marketer",
  "Networking & OS (Windows / Linux)",
];

// ========== Typewriter for looping roles (hero card) ==========
function useTypewriter(words, typingSpeed = 100, pauseTime = 1500) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    // finished typing -> pause then start deleting
    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    // finished deleting -> move to next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, pauseTime]);

  return words[index].substring(0, subIndex);
}

// ========== Simple typewriter for your NAME (only once) ==========
function useTypewriterOnce(text, typingSpeed = 110) {
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (subIndex === text.length) return; // stop when done

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, text, typingSpeed]);

  return text.substring(0, subIndex);
}

function App() {
  const typedHeroRole = useTypewriter(heroRoles, 90, 1200);
  const typedName = useTypewriterOnce("Faizan"); // 👈 your name typing

  return (
    <div className="app">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="container hero-content">
          {/* Left side - intro */}
          <motion.div
            className="hero-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <p className="hero-tag">
              Full Stack Web Developer · SEO · Automation
            </p>

            {/* NAME now types automatically */}
            <h1 className="hero-title">
              Hi, I&apos;m{" "}
              <span className="text-gradient">
                {typedName || "Faizan"}
              </span>
              <span className="blinking-cursor">|</span>
            </h1>

            <p className="hero-subtitle">
              I build modern, animated web applications with strong backend
              logic, clean UI, and SEO-focused structure. I also work with video
              editing and social media marketing to support complete digital
              growth.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View my projects
              </a>
              <a href="#contact" className="btn outline">
                Let&apos;s work together
              </a>
            </div>

            <div
              style={{
                marginTop: "1.2rem",
                fontSize: "0.85rem",
                color: "#9ca3af",
              }}
            >
              <div>• Bachelor in Computer Science – CGPA 3.90</div>
              <div>
                • ADP in Computer Science – Virtual University of Pakistan
              </div>
              <div>
                • Frontend · Backend · SEO · Video Editing · Social Media ·
                Networking · Windows / Linux
              </div>
            </div>
          </motion.div>

          {/* Right side - hero card with auto typing roles */}
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
          >
            {/* Removed the image part here */}

            <div
              style={{
                marginTop: "0.5rem",
                fontSize: "0.85rem",
                color: "#d1d5db",
              }}
            >
              <span>{typedHeroRole || heroRoles[0]}</span>
              <span className="blinking-cursor">|</span>
            </div>

            <div
              style={{
                marginTop: "0.9rem",
                fontSize: "0.8rem",
                color: "#d1d5db",
                lineHeight: 1.5,
              }}
            >
              <strong style={{ fontSize: "0.8rem" }}>Tech & Skills</strong>
              <br />
              HTML · CSS · JavaScript · PHP · Python · C++ · C#
              <br />
              React · Networking · Windows & Linux
              <br />
              SEO · Social Media Marketing · Video Editing
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other sections */}
      <About />
      <section id="skills" className="section">
        <div className="container">
          <Skills />
        </div>
      </section>
      <section id="education" className="section section-alt">
        <div className="container">
          <Education />
        </div>
      </section>
      <section id="projects" className="section">
        <div className="container">
          <Projects />
        </div>
      </section>
      <section id="services" className="section section-alt">
        <div className="container">
          <Services />
        </div>
      </section>
      <section id="contact" className="section">
        <div className="container">
          <Contact />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Faizan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
