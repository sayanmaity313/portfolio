import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, School, MapPin, Languages, Check } from 'lucide-react';
import './PersonalDetails.css';

export default function PersonalDetails() {
  const details = [
    {
      label: 'Full Name',
      value: 'Sayan Maity',
      icon: <User size={20} />
    },
    {
      label: 'Education',
      value: 'Bachelor of Hospital Management (BHM)',
      icon: <GraduationCap size={20} />
    },
    {
      label: 'University',
      value: 'The Neotia University',
      icon: <School size={20} />
    },
    {
      label: 'Location',
      value: 'Biharipur, Chorpalia, 721448, Purba Medinipur, West Bengal, India',
      icon: <MapPin size={20} />
    },
    {
      label: 'Languages Spoken',
      value: 'Bengali · Hindi · English',
      icon: <Languages size={20} />
    }
  ];

  return (
    <section className="section personal-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">08 / PROFILE</span>
          <h2>Professional Summary</h2>
        </div>

        <motion.div 
          className="profile-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-card-header">
            <div className="profile-avatar-frame">
              <img 
                src="/sayan-maity.png" 
                alt="Sayan Maity" 
                className="profile-avatar-img"
              />
            </div>
            <div>
              <h3 className="profile-card-name">Sayan Maity</h3>
              <p className="profile-card-sub">Bachelor of Hospital Management (BHM) Student • The Neotia University</p>
            </div>
          </div>

          <div className="profile-details-grid">
            {details.map((item) => (
              <div key={item.label} className="profile-detail-item">
                <div className="detail-item-icon">{item.icon}</div>
                <div className="detail-item-content">
                  <span className="detail-item-label">{item.label}</span>
                  <span className="detail-item-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
