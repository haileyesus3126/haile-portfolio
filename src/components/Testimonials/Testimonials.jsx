import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <h2>Testimonials</h2>
      <div className="testimonials-container">

        <div className="testimonial-card">
          <p>"Haileyesus is a highly dedicated developer with excellent attention to detail. Working with him was smooth and productive."</p>
          <h4>- Abebe, Team Lead</h4>
        </div>

        <div className="testimonial-card">
          <p>"His MERN stack skills are solid and his Task Management System project really impressed me."</p>
          <h4>- Alemu, Senior Developer</h4>
        </div>

        <div className="testimonial-card">
          <p>"Reliable, passionate, and always eager to learn — highly recommend Haileyesus for any project."</p>
          <h4>- Kebede, Coding Mentor</h4>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
