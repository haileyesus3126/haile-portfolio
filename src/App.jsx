import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const backToTop = document.getElementById("backToTop");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="app">
      <Sidebar toggleDarkMode={toggleDarkMode} />
      <div className="main-content">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

        <a href="#home" className="back-to-top" id="backToTop">
          ↑
        </a>
      </div>
    </div>
  );
}

export default App;
