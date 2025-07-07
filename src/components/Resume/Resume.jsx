import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume" data-aos="fade-up">
      <h2>My Skills</h2>
      <div className="skills-container">
        
        <div className="skill">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="skill">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Java</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div className="skill">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default Resume;
