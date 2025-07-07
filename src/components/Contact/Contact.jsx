import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>If you'd like to collaborate or have questions, feel free to reach out!</p>

      <div className="contact-info" data-aos="fade-right">
        <p><strong>Email:</strong> Haileyesus2024@gmail.com</p>
        <p><strong>Phone:</strong> +251 989 853 281</p>
        <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
      </div>

      <div className="contact-icons" data-aos="fade-left">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default Contact;
