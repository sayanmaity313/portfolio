import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, GraduationCap, Building2, ShieldCheck, Users, Activity, CheckCircle2 } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-meta">
              <span className="badge badge-green">
                <GraduationCap size={15} /> Bachelor of Hospital Management (BHM)
              </span>
              <span className="badge">
                <Building2 size={15} /> The Neotia University
              </span>
            </div>

            <h1 className="hero-statement">
              Building better experiences in healthcare through management, coordination &amp; people.
            </h1>

            <div className="hero-profile-line">
              <span className="hero-name">Sayan Maity</span>
              <span className="hero-sep">•</span>
              <span className="hero-location">
                <MapPin size={14} /> Purba Medinipur, West Bengal
              </span>
            </div>

            <p className="hero-intro">
              An aspiring healthcare management professional interested in hospital administration, healthcare operations, patient services, and organizational leadership.
            </p>

            <div className="hero-actions">
              <a href="#about" className="btn btn-primary">
                Explore Profile
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="editorial-portrait-card">
              <div className="portrait-image-wrapper">
                <img 
                  src="/sayan-maity.png" 
                  alt="Sayan Maity — Bachelor of Hospital Management" 
                  className="hero-portrait-img" 
                />
                <div className="portrait-overlay-badge">
                  <div className="badge-dot"></div>
                  <span className="badge-text">Sayan Maity</span>
                  <span className="badge-sub">BHM Candidate</span>
                </div>
              </div>

              <div className="portrait-card-details">
                <div className="card-tag font-mono">HEALTHCARE MANAGEMENT FOCUS</div>
                <div className="hero-pillar-mini-grid">
                  <div className="pillar-mini-item">
                    <Building2 size={16} className="pillar-mini-icon" />
                    <span>Hospital Operations</span>
                  </div>
                  <div className="pillar-mini-item">
                    <Activity size={16} className="pillar-mini-icon" />
                    <span>Patient Service Quality</span>
                  </div>
                  <div className="pillar-mini-item">
                    <Users size={16} className="pillar-mini-icon" />
                    <span>Team Coordination</span>
                  </div>
                  <div className="pillar-mini-item">
                    <ShieldCheck size={16} className="pillar-mini-icon" />
                    <span>Resource &amp; Records</span>
                  </div>
                </div>

                <div className="portrait-institution-footer">
                  <span className="footer-label">INSTITUTION</span>
                  <span className="footer-value">The Neotia University, School of Health Sciences</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

