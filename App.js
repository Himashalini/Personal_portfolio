import React, { useState, useEffect } from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to body
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className="container">
      <header>
        <h1>Majjiga Hima Shalini</h1>
        <p>Full Stack Developer | MERN Stack Enthusiast</p>
        <div className="social-links">
          <a href="mailto:mhimahimashalini@gmail.com"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/himashalini" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Himashalini" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a final-year Computer Science student with a passion for building
          scalable web applications. I specialize in the MERN stack and love
          solving real-world problems through code.
        </p>
      </section>
<section id="education">
        <h2>Education</h2>
        <ul>
          <li><strong>Anantha Lakshmi Institute of Technology and Sciences</strong> – B.Tech, CSE (2021–2025) – GPA: 8.00</li>
          <li><strong>Master’s Junior College for Girls</strong> – Intermediate (2019–2021) – GPA: 8.6</li>
          <li><strong>Uday High School</strong> – SSC (2018–2019) – GPA: 9.8</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Securing Physical Manufacturing Systems from Cyberattacks:</strong>
            <ul>
              <li>Designed a system to monitor machine behavior and detect cyberattacks in real time.</li>
              <li>Added automatic alerts for quick user notification.</li>
              <li>Trained system to recognize normal patterns and block unusual behavior.</li>
            </ul>
          </li>
          <li><strong>Car Vault App:</strong>
            <ul>
              <li>Scalable vehicle management with CRUD operations.</li>
              <li>Filtering by mileage/distance, and owner contact integration.</li>
            </ul>
          </li>
          <li><strong>Personal Portfolio:</strong>
            <ul>
              <li>Responsive design with project highlights and smooth navigation.</li>
              <li>Interactive layout showcasing skills and achievements.</li>
            </ul>
          </li>
        </ul>
      </section>

     <section id="skills">
        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> C (Intermediate), Python (Basic)<br />
          <strong>Frontend:</strong> HTML (Intermediate), CSS (Intermediate)<br />
          <strong>Database:</strong> SQL (Basic)
        </p>
      </section>
      <section id="activities">
        <h2>Extra-Curricular Activities</h2>
        <ul>
          <li>Strong Communication Skills</li>
          <li>Problem-Solving Abilities</li>
          <li>Teamwork and Collaboration</li>
        </ul>
      </section>

      <section id="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Girl Representative at Anantha Lakshmi College</li>
          <li>Secured Second Prize in JAM (Just A Minute) Competition</li>
        </ul>
      </section>
       <footer>
        &copy; {new Date().getFullYear()} Majjiga Hima Shalini | Ananthapur, India
      </footer>
    </div>
  );
}

export default App;
