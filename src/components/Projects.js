// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "A modern, animated portfolio built with React to showcase my skills in frontend, backend, and UI design.",
    tech: ["React", "Framer Motion", "CSS"],
    link: "https://your-portfolio-link.com", // change to your real link later
  },
  {
    name: "Full Stack Web App",
    description:
      "A small full stack web application showing authentication, CRUD operations, backend logic, and clean UI flows.",
    tech: ["JavaScript", "PHP / Python", "REST API"],
    link: "https://your-fullstack-project.com", // change to your real link later
  },
  {
    name: "SEO & Analytics Dashboard",
    description:
      "A concept dashboard to track SEO metrics, traffic sources, keywords, and performance in one place.",
    tech: ["JavaScript", "Charts", "API"],
    link: "https://your-seo-dashboard.com", // change to your real link later
  },
  {
    name: "Hotel Management System",
    description:
      "A web-based hotel management system to manage rooms, guests, bookings, and admin controls via a simple UI.",
    tech: ["HTML", "CSS", "JavaScript", "Blogger"],
    link: "https://hotel-mangement-by-faizan.blogspot.com/",
  },

  // ⭐ NEW — Calculator Project
  {
    name: "Simple Calculator",
    description:
      "A functional web calculator designed with clean UI and essential arithmetic features built on Blogger.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://calculatorbyfaizan1.blogspot.com/",
  },
];

function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        A selection of my work, including frontend apps, full stack builds, dashboards, and custom tools.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <h3 className="project-title">{project.name}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t} className="project-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* 🔗 Project Link Box */}
            {project.link && (
              <div className="project-link-box">
                <p className="project-link-label">Live Project Link</p>
                <div className="project-link-url">{project.link}</div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  Open Project →
                </a>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
