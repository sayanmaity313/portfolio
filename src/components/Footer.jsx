import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Mindset', href: '#mindset' },
    { name: 'Journey', href: '#journey' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">SM</div>
            <div className="footer-brand-info">
              <span className="footer-name">Sayan Maity</span>
              <span className="footer-degree">Bachelor of Hospital Management</span>
              <span className="footer-uni">The Neotia University</span>
            </div>
          </div>

          <nav className="footer-nav">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Sayan Maity. All rights reserved.
          </p>
          <p className="footer-credit">
            Hospital Administration &amp; Healthcare Management Portfolio
          </p>
        </div>

      </div>
    </footer>
  );
}
