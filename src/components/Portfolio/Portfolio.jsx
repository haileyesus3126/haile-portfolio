import React from "react";
import "./Portfolio.css";
import { assets } from "../../assets/assets";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="projects-grid">

        <div className="project-card">
          <img src={assets.foodDelivery} alt="Food Delivery" />
          <div className="project-info">
            <h3>Food Delivery Website</h3>
            <p>Built with MERN Stack</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Site</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.taskManager} alt="Task Manager" />
          <div className="project-info">
            <h3>Task Management System</h3>
            <p>Built with Java, Spring Boot, Thymeleaf</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Site</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.carWebsite} alt="Car E-commerce" />
          <div className="project-info">
            <h3>Car E-commerce Website</h3>
            <p>Built with MERN Stack</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Site</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
