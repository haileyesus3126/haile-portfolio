import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="profile">
          <img src={assets.haileyesus} alt="Haileyesus" className="profile-img" />
          <h2>Haileyesus</h2>
        </div>

       <nav className="nav-links">
  <a href="#home" onClick={() => setShowSidebar(false)}>Home</a>
  <a href="#about" onClick={() => setShowSidebar(false)}>About Me</a>
  <a href="#resume" onClick={() => setShowSidebar(false)}>Resume</a>
  <a href="#portfolio" onClick={() => setShowSidebar(false)}>Portfolio</a>
  <a href="#testimonials" onClick={() => setShowSidebar(false)}>Testimonials</a>
  <a href="#contact" onClick={() => setShowSidebar(false)}>Contact</a>
</nav>

        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="menu-btn" onClick={() => setShowSidebar(!showSidebar)}>
        {showSidebar ? "✖" : "☰"}
      </button>
    </>
  );
}

export default Sidebar;
