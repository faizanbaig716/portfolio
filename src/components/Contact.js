// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Tell me what you want to build – a website, automation idea, or complete online presence.
      </p>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Project type</label>
          <input
            id="subject"
            type="text"
            placeholder="Website, automation, SEO, video, etc."
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Briefly explain your idea or problem..."
            required
          />
        </div>

        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>

      <div className="contact-extra">
        <p>
          You can also email me directly at{" "}
          <a href="mailto:faizanbaig716@gmail.com">faizanbaig716@gmail.com</a>.
        </p>
        <p>
          Or connect on{" "}
          <a href="https://www.linkedin.com/in/faizan-baig-29714a211/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          and{" "}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
