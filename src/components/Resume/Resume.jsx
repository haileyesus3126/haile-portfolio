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
            <li>Next.js</li>
            <li>Bootstrap</li>
             <li>Responsive Web Design</li>
             <li>Tailwind CSS</li>
             <li>Cross-Browser Compatibility</li>
             <li>Version Control (Git, GitHub)</li>
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
            <li>RESTful API Design & Development</li>
            <li>JSON & HTTP Protocols</li>
            <li>Authentication & Authorization (JWT, OAuth)</li>
          </ul>
        </div>

        <div className="skill">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git & GitHub (Version Control)</li>
            <li>Figma (UI/UX Design & Prototyping)</li>
            <li>Visual Studio Code (VS Code) (Code Editor)</li>
            <li>Eclipse IDE (Java Development)</li>
            <li>Postman (API Testing & Development)</li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default Resume;
