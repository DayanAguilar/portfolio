import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="resume-container">
      <div className="intro-section">
        <header className="resume-header">
          <h1>Hi I'm Dayan</h1>
          <h1>Aguilar Alcocer</h1>
          <p className="subtitle">Systems Engineering Student</p>
        </header>
        <div className="image-section">
          <img src="https://via.placeholder.com/250" alt="Profile Example" />
        </div>
      </div>

      <section className="tagline">
        <p>
          Full Stack Developer | Passionate about APIs | Creative Python Problem Solver
          tackling real-world challenges with smart solutions
        </p>
      </section>

      <section className="about-section">
        <p>
          A passionate coder who enjoys creating projects with significant impact.
          Skilled in multiple programming languages and frameworks with experience
          in building web applications and cloud solutions. Committed to continuous
          learning and generating innovative solutions.
        </p>
      </section>

      <section className="contact-links">
        <a href="https://github.com/DayanAguilar" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/dayan-aguilar-alcocer-6b2bb22a5/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:dayan.aguilar.alcocer@gmail.com">
          <i className="fas fa-envelope"></i> Email
        </a>
      </section>
    </div>
  );
};

export default Home;
