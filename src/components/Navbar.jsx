import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, HeartPulse } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Mindset', href: '#mindset' },
    { name: 'Journey', href: '#journey' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <div className="logo-badge">SM</div>
          <div className="logo-text">
            <span className="logo-name">Sayan Maity</span>
            <span className="logo-tagline">Healthcare Management</span>
          </div>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn btn-primary btn-nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            Let's Connect
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <div className="logo-badge">SM</div>
            <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-footer">
            <a
              href="#contact"
              className="btn btn-primary w-full"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              Let's Connect <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
