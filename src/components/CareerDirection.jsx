import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Sparkles, Target } from 'lucide-react';
import './CareerDirection.css';

export default function CareerDirection() {
  const targetRoles = [
    { title: 'Hospital Administration', desc: 'Supporting executive and facility administration.' },
    { title: 'Healthcare Operations', desc: 'Managing daily clinical and patient service workflows.' },
    { title: 'Patient Services & Desk Management', desc: 'Enhancing patient admission, desk relations & experience.' },
    { title: 'Hospital Front Office Management', desc: 'Supervising reception, registration & visitor orientation.' },
    { title: 'Healthcare Quality Management', desc: 'Assisting quality assurance, safety audits & standards.' },
    { title: 'Healthcare Coordination', desc: 'Synchronizing multi-departmental healthcare routines.' },
    { title: 'Healthcare HR / Administration', desc: 'Supporting staff scheduling, onboarding & personnel management.' },
    { title: 'Healthcare Management Trainee', desc: 'Entry-level managerial roles in hospitals & healthcare networks.' }
  ];

  return (
    <section id="direction" className="section direction-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">07 / DIRECTION</span>
          <h2>Where I'm Heading</h2>
        </div>

        <motion.div 
          className="direction-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="banner-icon">
            <Compass size={32} />
          </div>
          <div className="banner-content">
            <span className="banner-tag font-mono">CAREER POSITIONING STATEMENT</span>
            <p className="banner-quote">
              “Exploring opportunities where healthcare, people and management come together to build better institutional experiences.”
            </p>
          </div>
        </motion.div>

        <div className="roles-section-header">
          <h3>Target Domains &amp; Career Aspirations</h3>
          <p>Areas of healthcare management where I seek to contribute, grow, and apply my administrative background:</p>
        </div>

        <div className="roles-grid">
          {targetRoles.map((role, idx) => (
            <motion.div
              key={role.title}
              className="role-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="role-card-header">
                <Target size={18} className="target-icon" />
                <h4 className="role-title">{role.title}</h4>
              </div>
              <p className="role-desc">{role.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
