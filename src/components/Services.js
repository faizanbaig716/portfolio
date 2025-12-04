// src/components/Services.js
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Build responsive websites and web apps with clean frontend, solid backend logic, and smooth animations.",
  },
  {
    title: "SEO & Digital Growth",
    description:
      "Improve visibility with technical and on-page SEO, content structure, and data-driven optimization.",
  },
  {
    title: "Social Media & Video",
    description:
      "Create video content and simple editing for social media campaigns that support your website and brand.",
  },
];

function Services() {
  return (
    <motion.div
      className="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">
        I combine development, SEO, and creative work to build complete online experiences.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
