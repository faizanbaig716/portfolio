// src/components/Education.js
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Associate Degree Program in Computer Science (ADP-CS)",
    institution: "Virtual University of Pakistan",
    period: "2-year program · Completed",
    details:
      "Built a strong foundation in programming, databases, and core computer science concepts. Gained early experience with problem-solving and software development basics.",
  },
  {
    title: "Bachelor in Computer Science (BSCS)",
    institution: "Your University Name",
    period: "Completed · CGPA 3.90",
    details:
      "Deepened knowledge in algorithms, data structures, web development, software engineering, and backend logic. Worked on multiple full stack projects with modern web technologies.",
  },
  {
    title: "Self-Learning & Practice",
    institution: "Online Resources & Personal Projects",
    period: "Ongoing",
    details:
      "Improving skills in React, backend development, SEO, video editing, and automation by building real-world projects and testing new ideas.",
  },
];

function Education() {
  return (
    <motion.div
      className="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
        A solid computer science path, starting from ADP to BSCS, supported by continuous self-learning.
      </p>

      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="timeline-period">{item.period}</p>
              <p className="timeline-details">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;
