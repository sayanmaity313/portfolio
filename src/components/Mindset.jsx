import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users2, Workflow, TrendingUp, ShieldCheck } from 'lucide-react';
import './Mindset.css';

export default function Mindset() {
  const principles = [
    {
      num: '01',
      title: 'Patient First',
      icon: <Heart size={24} />,
      desc: 'Understanding that healthcare management ultimately exists to improve patient experience, comfort, and service quality across every hospital touchpoint.'
    },
    {
      num: '02',
      title: 'People & Coordination',
      icon: <Users2 size={24} />,
      desc: 'Effective healthcare delivery depends on seamless, empathetic communication between patients, clinical staff, administration, and management.'
    },
    {
      num: '03',
      title: 'Organized Operations',
      icon: <Workflow size={24} />,
      desc: 'Efficient administrative systems, clear documentation, and structured workflows enable healthcare facilities to operate smoothly without friction.'
    },
    {
      num: '04',
      title: 'Continuous Improvement',
      icon: <TrendingUp size={24} />,
      desc: 'Consistently seeking opportunities to enhance patient service workflows, reduce waiting times, and elevate institutional healthcare standards.'
    },
    {
      num: '05',
      title: 'Professional Responsibility',
      icon: <ShieldCheck size={24} />,
      desc: 'Upholding strict confidentiality, ethics, reliability, empathy, and accountability in every administrative decision and patient interaction.'
    }
  ];

  return (
    <section id="mindset" className="section mindset-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">03 / MINDSET</span>
          <h2>The Management Mindset</h2>
          <p className="section-subtitle">
            Core operating principles that shape my approach to hospital administration and healthcare leadership.
          </p>
        </div>

        <div className="mindset-grid">
          {principles.map((item, index) => (
            <motion.div
              key={item.num}
              className="mindset-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mindset-card-top">
                <span className="mindset-num">{item.num}</span>
                <div className="mindset-icon">{item.icon}</div>
              </div>
              <h3 className="mindset-title">{item.title}</h3>
              <p className="mindset-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
