import React from "react";
import "../styles/content.css";

function Contact() {
  return (
    <div className="content-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email: sksiddharth27@gmail.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Location: Faridabad</p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/siddharthkoundal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-koundal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
