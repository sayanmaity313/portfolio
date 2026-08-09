import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin, CheckCircle, BookOpen } from 'lucide-react';
import './Journey.css';

export default function Journey() {
  const focusAreas = [
    'Hospital Administration',
    'Healthcare Management',
    'Healthcare Operations',
    'Patient Care Management',
    'Healthcare Communication',
    'Quality Management',
    'Hospital Finance',
    'Human Resource Management',
    'Healthcare Information Systems'
  ];

  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">04 / JOURNEY</span>
          <h2>Academic Journey</h2>
          <p className="section-subtitle">
            Formal education and core academic coursework in hospital administration and health sciences.
          </p>
        </div>

        <div className="journey-content">
          <motion.div 
            className="academic-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="academic-card-header">
              <div className="degree-badge-group">
                <div className="degree-icon">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <span className="degree-tag font-mono">UNDERGRADUATE DEGREE</span>
                  <h3 className="degree-title">Bachelor of Hospital Management (BHM)</h3>
                </div>
              </div>

              <div className="university-info">
                <span className="uni-name">
                  <School size={16} /> The Neotia University
                </span>
                <span className="uni-location">
                  <MapPin size={14} /> West Bengal, India
                </span>
              </div>
            </div>

            <div className="academic-body">
              <div className="academic-overview">
                <h4>Program Overview &amp; Curriculum Focus</h4>
                <p>
                  The Bachelor of Hospital Management program provides comprehensive training in the administrative, financial, operational, and ethical aspects of modern healthcare facilities. The curriculum prepares candidates to manage hospital departments, lead healthcare teams, and optimize patient delivery systems.
                </p>
              </div>

              <div className="focus-areas-container">
                <h4>Core Curriculum Focus Areas</h4>
                <div className="focus-grid">
                  {focusAreas.map((area, index) => (
                    <motion.div 
                      key={area}
                      className="focus-pill"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <CheckCircle size={15} className="focus-check" />
                      <span>{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            <div className="academic-footer">
              <div className="status-badge">
                <BookOpen size={15} /> Program Currently Pursuing
              </div>
              <span className="academic-note">
                Focusing on practical administrative frameworks and healthcare management standards.
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
