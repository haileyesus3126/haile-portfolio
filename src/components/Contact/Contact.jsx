import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7m6ul1n",        
        "template_90fhvs3",      
        form.current,
        "8yDueQJ3qutZgZRIP"    
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out using the form below 👇</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p><strong>Email:</strong> haileyesus2024@gmail.com</p>
        <p><strong>Location:</strong> Ethiopia</p>
      </div>

      <div className="contact-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:haileyesus2024@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
