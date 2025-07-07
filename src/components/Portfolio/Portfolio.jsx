import React from "react";
import "./Portfolio.css";
import { assets } from "../../assets/assets";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="projects-grid">

        <div className="project-card" data-aos="zoom-in" data-aos-delay="100">
          <img src={assets.foodDelivery} alt="Food Delivery" />
          <div className="project-info">
            <h3>Food Delivery Website</h3>
            <p>Built with MERN Stack</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub className="icon-link" /> GitHub
              </a>
              <a href="https://your-live-link.com" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="icon-link" /> Live Site
              </a>
            </div>
          </div>
        </div>

        <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
          <img src={assets.taskManager} alt="Task Manager" />
          <div className="project-info">
            <h3>Task Management System</h3>
            <p>Built with Java, Spring Boot, Thymeleaf</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub className="icon-link" /> GitHub
              </a>
              <a href="https://your-live-link.com" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="icon-link" /> Live Site
              </a>
            </div>
          </div>
        </div>

        <div className="project-card" data-aos="zoom-in" data-aos-delay="300">
          <img src={assets.carWebsite} alt="Car E-commerce" />
          <div className="project-info">
            <h3>Car E-commerce Website</h3>
            <p>Built with MERN Stack</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub className="icon-link" /> GitHub
              </a>
              <a href="https://your-live-link.com" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="icon-link" /> Live Site
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
