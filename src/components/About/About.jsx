import React from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaFilePdf } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        
        <div className="about-text">
          <p>
            Hello, I'm <span>Haileyesus</span>, a passionate and dedicated developer
            based in Addis Ababa, Ethiopia. I enjoy building clean, responsive websites 
            and learning new technologies to solve real-world problems.
          </p>
          <p>
            I focus on creating high-quality projects with modern tools like React, JavaScript, and more.
          </p>
          <a href="/Haileyesus.pdf" target="_blank" rel="noreferrer" className="btn">
            <FaFilePdf className="icon-btn" /> View CV
          </a>
        </div>

        <div className="about-info">
          <p><FaUser className="icon" /> <strong>Name:</strong> Haileyesus</p>
          <p><FaEnvelope className="icon" /> <strong>Email:</strong> Haileyesus2024@gmail.com</p>
          <p><FaMapMarkerAlt className="icon" /> <strong>Location:</strong> Addis Ababa, Ethiopia</p>
          <p><FaCheckCircle className="icon" /> <strong>Freelance:</strong> Available</p>
        </div>
        
      </div>
    </section>
  );
}

export default About;
