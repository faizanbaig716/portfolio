// src/components/Navbar.js
import React from "react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <motion.div
          className="navbar-logo"
          onClick={() => handleScroll("home")}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="logo-dot" />
          <span className="logo-text">Faizan.dev</span>
        </motion.div>

        <motion.nav
          className="navbar-links"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {links.map((item) => (
            <button
              key={item.id}
              className="navbar-link"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}

export default Navbar;
