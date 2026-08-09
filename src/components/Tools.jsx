import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FileSpreadsheet, Presentation, Landmark, Monitor } from 'lucide-react';
import './Tools.css';

export default function Tools() {
  const toolsList = [
    {
      name: 'Microsoft Word',
      icon: <FileText size={26} />,
      capabilities: 'Documentation · Reports · Professional Formatting',
      desc: 'Creation of formal hospital administrative letters, patient documentation, standard operating procedure (SOP) manuals, and institutional reports.'
    },
    {
      name: 'Microsoft Excel',
      icon: <FileSpreadsheet size={26} />,
      capabilities: 'Data Organization · Tables · Basic Analysis',
      desc: 'Organizing patient admission logs, departmental inventory metrics, shift rosters, statistical tables, and basic formula calculations.'
    },
    {
      name: 'Microsoft PowerPoint',
      icon: <Presentation size={26} />,
      capabilities: 'Presentations · Visual Communication',
      desc: 'Designing clean, informative slide decks for hospital department briefings, student seminars, and management review meetings.'
    },
    {
      name: 'Tally',
      icon: <Landmark size={26} />,
      capabilities: 'Basic Accounting / Financial Record Management',
      desc: 'Understanding fundamental bookkeeping, transaction voucher entries, billing logs, and hospital account structures.'
    },
    {
      name: 'Office Productivity Suite',
      icon: <Monitor size={26} />,
      capabilities: 'Documentation · Data Entry · Digital Records',
      desc: 'Fast, accurate keyboard data entry, email communication etiquette, digital archiving, and internet-based healthcare research.'
    }
  ];

  return (
    <section id="tools" className="section tools-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">06 / TOOLS</span>
          <h2>Tools I Work With</h2>
          <p className="section-subtitle">
            Essential software applications and office tools utilized for healthcare administration and report management.
          </p>
        </div>

        <div className="tools-grid">
          {toolsList.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="tool-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="tool-card-top">
                <div className="tool-icon">{tool.icon}</div>
                <h3 className="tool-name">{tool.name}</h3>
              </div>

              <div className="tool-caps">{tool.capabilities}</div>
              <p className="tool-desc">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
