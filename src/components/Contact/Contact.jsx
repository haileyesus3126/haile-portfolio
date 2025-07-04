import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to collaborate or have questions, feel free to reach out!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> Haileyesus2024@gmail.com</p>
        <p><strong>Phone:</strong> +251 989 853 281</p>
        <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
      </div>

      <div className="contact-icons">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
