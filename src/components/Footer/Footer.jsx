import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/DayanAguilar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dayan-aguilar-alcocer-6b2bb22a5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-copy">
        © 2025 Dayan Aguilar Alcocer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
