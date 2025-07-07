import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <h2>Testimonials</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"Haileyesus is a highly dedicated developer with excellent attention to detail. Working with him was smooth and productive."</p>
            <div className="author">
              <img src="https://via.placeholder.com/60" alt="Michael" />
              <h4>Michael Postal<br /><span>Team Lead</span></h4>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"His MERN stack skills are solid and his Task Management System project really impressed me."</p>
            <div className="author">
              <img src="https://via.placeholder.com/60" alt="Senior Dev" />
              <h4>Senior Developer<br /><span>Hallmark</span></h4>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"Reliable, passionate, and always eager to learn — highly recommend Haileyesus for any project."</p>
            <div className="author">
              <img src="https://via.placeholder.com/60" alt="Mentor" />
              <h4>Mentor<br /><span>Coding Bootcamp</span></h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
