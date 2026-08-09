import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Network, FolderKanban, Sliders, Users, ShieldCheck, ChevronRight } from 'lucide-react';
import './Strengths.css';

export default function Strengths() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const strengths = [
    {
      title: 'Communication',
      icon: <MessageSquare size={22} />,
      tagline: 'Professional & Empathetic Interpersonal Dialogue',
      desc: 'Able to communicate effectively and professionally with individuals from diverse socio-cultural and medical backgrounds—ranging from patients in distress to senior clinical consultants and administrative staff.'
    },
    {
      title: 'Coordination',
      icon: <Network size={22} />,
      tagline: 'Inter-Departmental Synchronization',
      desc: 'Enthusiastic about aligning people, department routines, and daily operational activities to ensure zero bottlenecking between emergency desks, inpatient care, diagnostics, and billing services.'
    },
    {
      title: 'Organization',
      icon: <FolderKanban size={22} />,
      tagline: 'Structured Records & Process Discipline',
      desc: 'Strong focus on structured work environments, clear record-keeping, medical documentation integrity, and standardized operating procedures (SOPs).'
    },
    {
      title: 'Adaptability',
      icon: <Sliders size={22} />,
      tagline: 'Agility in Dynamic Healthcare Settings',
      desc: 'Quick to learn and adapt to new digital tools, hospital management software, shifting policy frameworks, and high-tempo clinical priorities.'
    },
    {
      title: 'Teamwork',
      icon: <Users size={22} />,
      tagline: 'Collaborative Excellence & Empathy',
      desc: 'Recognizes that exceptional patient care relies on cohesive teamwork. Fosters mutual support, active listening, and constructive team engagement.'
    },
    {
      title: 'Responsibility',
      icon: <ShieldCheck size={22} />,
      tagline: 'Reliability, Ethics & Patient Confidentiality',
      desc: 'Approaches every administrative duty with strict ethical accountability, punctual execution, respect for patient privacy, and professional discretion.'
    }
  ];

  return (
    <section id="strengths" className="section strengths-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">05 / STRENGTHS</span>
          <h2>What I Bring to a Healthcare Organization</h2>
          <p className="section-subtitle">
            Key professional attributes that drive administrative effectiveness and patient satisfaction.
          </p>
        </div>

        <div className="strengths-layout">
          {/* Left Vertical List */}
          <div className="strengths-list">
            {strengths.map((item, index) => (
              <button
                key={item.title}
                className={`strength-item ${selectedIndex === index ? 'active' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="strength-item-left">
                  <span className="strength-num">0{index + 1}</span>
                  <span className="strength-icon">{item.icon}</span>
                  <span className="strength-title-text">{item.title}</span>
                </div>
                <ChevronRight size={18} className="strength-arrow" />
              </button>
            ))}
          </div>

          {/* Right Highlight Box */}
          <div className="strength-detail-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={strengths[selectedIndex].title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="strength-detail-card"
              >
                <div className="detail-badge-icon">
                  {strengths[selectedIndex].icon}
                </div>
                <span className="detail-tag font-mono">CORE STRENGTH 0{selectedIndex + 1}</span>
                <h3 className="detail-title">{strengths[selectedIndex].title}</h3>
                <p className="detail-tagline">{strengths[selectedIndex].tagline}</p>
                <div className="detail-divider"></div>
                <p className="detail-description">{strengths[selectedIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
