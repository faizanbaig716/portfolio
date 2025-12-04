import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const roles = [
  "Full Stack Web Developer",
  "SEO Specialist",
  "Video Editor",
  "Social Media Marketer",
  "Networking & OS (Windows / Linux)",
];

// Custom hook with "enabled" flag so it only runs when in view
function useTypewriter(words, typingSpeed = 100, pauseTime = 1500, enabled = true) {
  const [index, setIndex] = useState(0);        // which word
  const [subIndex, setSubIndex] = useState(0);  // which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return; // do nothing until section is in view

    const currentWord = words[index];

    // Finished typing, pause then start deleting
    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    // Finished deleting, move to next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, pauseTime, enabled]);

  if (!enabled) return ""; // nothing before in view

  return words[index].substring(0, subIndex);
}

function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const typedRole = useTypewriter(roles, 90, 1200, isInView);

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section-title text-gradient text-center mb-6">
          About Me
        </h2>

        <div className="card p-8 md:p-10 text-center max-w-3xl mx-auto">
          {/* Name + typing line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
              Hello, I am
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold mb-3">
              <span className="text-gradient">Faizan Baig</span>
            </h3>

            <p className="text-base md:text-lg text-gray-300">
              I&apos;m{" "}
              <span className="text-gradient font-medium">
                {typedRole || roles[0]}
              </span>
              <span className="blinking-cursor">|</span>
            </p>
          </motion.div>

          {/* Education */}
          <div className="mb-5 text-sm md:text-base text-gray-300 leading-relaxed">
            <p className="mb-2">
              I have a <strong>Bachelor in Computer Science (BSCS)</strong> with a{" "}
              <strong>CGPA of 3.90</strong>, and a{" "}
              <strong>2-year Associate Degree in Computer Science (ADP-CS)</strong>{" "}
              from the <strong>Virtual University of Pakistan</strong>.
            </p>
            <p>
              I focus on building clean, modern web applications with both{" "}
              <strong>frontend</strong> and <strong>backend</strong> logic,
              supported by SEO, networking, and system knowledge.
            </p>
          </div>

          <p className="mb-6 text-xs md:text-sm text-gray-400">
            I’ve completed multiple web projects using PHP, JavaScript, and other
            technologies, and I’m always experimenting with new ideas and automation.
          </p>

          {/* Skills badges */}
          <p className="mb-3 text-sm font-medium text-gray-200">
            Main skills & areas:
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm">
            <span className="card rounded px-3 py-2">Web Development</span>
            <span className="card rounded px-3 py-2">Frontend Development</span>
            <span className="card rounded px-3 py-2">
              Backend Development (PHP / Python)
            </span>
            <span className="card rounded px-3 py-2">SEO & Digital Marketing</span>
            <span className="card rounded px-3 py-2">Video Editing</span>
            <span className="card rounded px-3 py-2">Social Media Marketing</span>
            <span className="card rounded px-3 py-2">C++ / C# / OOP</span>
            <span className="card rounded px-3 py-2">Networking</span>
            <span className="card rounded px-3 py-2">Windows & Linux</span>
            <span className="card rounded px-3 py-2">
              Software Requirement Engineering
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
