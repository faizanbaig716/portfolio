// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Web Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Responsive UI",
      "Frontend & Backend Logic",
    ],
  },
  {
    title: "Programming Languages",
    items: [
      "Python",
      "PHP",
      "C++",
      "C#",
      "OOP & Problem Solving",
    ],
  },
  {
    title: "Networking",
    items: [
      "Computer Networks",
      "Network Protocols (TCP/IP)",
      "Subnetting & Routing Basics",
      "LAN/WAN Concepts",
      "Network Security Essentials",
    ],
  },
  {
    title: "Operating Systems",
    items: [
      "Windows Administration",
      "Linux Administration (Ubuntu / Debian)",
      "File Systems & Permissions",
      "Shell / Terminal Commands",
      "System Monitoring & Task Handling",
    ],
  },
  {
    title: "SEO & Digital Marketing",
    items: [
      "SEO Strategy & Optimization",
      "On-page & Off-page SEO",
      "Keyword Research",
      "Social Media Marketing",
      "Video Editing for Brand Content",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Git & GitHub",
      "VS Code",
      "Task Automation Basics",
      "Debugging & Testing",
      "API Integration",
    ],
  },
];

function Skills() {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        A strong blend of development, networking, operating systems, SEO, and creative digital skills.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <h3 className="skill-title">{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill-item">
                  <span className="skill-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
