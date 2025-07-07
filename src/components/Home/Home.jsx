import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { assets } from "../../assets/assets";

function Home() {
  return (
    <section
      id="home"
      className="home"
      style={{
        backgroundImage: `url(${assets.background})`,
      }}
    >
      <div className="overlay">
        <div className="home-content" data-aos="fade-up">
          <h1>Welcome</h1>
          <h2>
            I'm{" "}
            <span className="typed-text">
              <Typewriter
                words={["Haileyesus", "a Full-Stack Developer", "a Problem Solver"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p>Passionate about building clean & modern web apps</p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
