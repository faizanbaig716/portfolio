import React from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-blue-600 text-white overflow-hidden">
      
      {/* Particles Background */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: { value: "#00000080" } },
          fpsLimit: 30,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: "#14091dff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            collisions: { enable: true },
            move: { enable: true, speed: 2, outModes: "bounce" },
            number: { value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Centered Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
          Hi, I'm Faizan
        </h1>

        <p className="text-xl md:text-2xl mb-6">
          <Typewriter
            words={["Frontend Developer", "React JS Developer", "UI/UX Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        {/* Hire Me Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
        >
          Hire Me
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
