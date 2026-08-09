import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, School, Languages, Sparkles } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">01 / ABOUT</span>
          <h2>Beyond Healthcare, Into Management</h2>
        </div>

        <div className="about-grid">
          
          {/* Left: Editorial Statement & Photo */}
          <motion.div 
            className="about-editorial-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-photo-card">
              <div className="about-photo-frame">
                <img 
                  src="/sayan-maity.png" 
                  alt="Sayan Maity — Hospital Management Professional" 
                  className="about-portrait-img"
                />
              </div>
              <div className="about-quote-box">
                <span className="quote-mark">“</span>
                <p className="about-quote-text">
                  Healthcare institutions do not run on clinical care alone. They thrive on structured administration, empathetic patient services, and seamless operational coordination.
                </p>
                <div className="about-quote-author">
                  <span className="author-name">Sayan Maity</span>
                  <span className="author-title">Bachelor of Hospital Management Student</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative + Info Panel */}
          <motion.div 
            className="about-content-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about-paragraph highlight-para">
              As a dedicated student pursuing a <strong>Bachelor of Hospital Management (BHM) at The Neotia University</strong>, I view healthcare management as the vital bridge that connects medical excellence with operational efficiency.
            </p>

            <p className="about-paragraph">
              Hospital administration demands a synthesis of organized workflows, patient-centric communication, resource management, and team collaboration. My academic training equips me to understand front office dynamics, medical records management, quality assurance standards, and healthcare information systems.
            </p>

            <p className="about-paragraph">
              I am driven by a belief that well-managed hospital operations directly enhance patient comfort, streamline staff productivity, and foster an atmosphere of trust and care.
            </p>

            {/* Information Panel */}
            <div className="info-panel">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={18} />
                </div>
                <div className="info-content">
                  <span className="info-label">Based in</span>
                  <span className="info-val">Purba Medinipur, West Bengal</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <BookOpen size={18} />
                </div>
                <div className="info-content">
                  <span className="info-label">Education</span>
                  <span className="info-val">Bachelor of Hospital Management</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <School size={18} />
                </div>
                <div className="info-content">
                  <span className="info-label">University</span>
                  <span className="info-val">The Neotia University</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Languages size={18} />
                </div>
                <div className="info-content">
                  <span className="info-label">Languages</span>
                  <span className="info-val">Bengali · Hindi · English</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
