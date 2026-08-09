import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, HeartPulse, Users, LayoutGrid, CheckCircle2, ChevronRight } from 'lucide-react';
import './Expertise.css';

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'hospital-admin',
      title: 'Hospital Administration',
      icon: <Building2 size={20} />,
      subtitle: 'Core operational frameworks, front-office workflows & clinical administration',
      skills: [
        { name: 'Hospital Administration', desc: 'Understanding executive hospital structures & operational oversight.' },
        { name: 'Healthcare Operations', desc: 'Managing daily facility routines, staffing flows, and department coordination.' },
        { name: 'Hospital Workflow Management', desc: 'Optimizing patient admission, discharge, and transfer procedures.' },
        { name: 'Patient Service Management', desc: 'Ensuring seamless service delivery, desk assistance & inquiries.' },
        { name: 'Front Office Operations', desc: 'Handling reception, registration desk, appointment scheduling & visitors.' },
        { name: 'Healthcare Documentation', desc: 'Maintaining accurate billing records, consent forms & administrative logs.' },
        { name: 'Medical Records Management', desc: 'Organizing confidential patient files, medical histories & indexing.' },
        { name: 'Hospital Coordination', desc: 'Fostering inter-departmental collaboration between doctors, nurses & staff.' }
      ]
    },
    {
      id: 'healthcare-mgmt',
      title: 'Healthcare Management',
      icon: <HeartPulse size={20} />,
      subtitle: 'Quality assurance, patient experience & healthcare policy compliance',
      skills: [
        { name: 'Healthcare Quality Management', desc: 'Adhering to accreditation benchmarks, safety standards & audit protocols.' },
        { name: 'Patient Experience', desc: 'Designing empathetic care touchpoints and feedback resolution channels.' },
        { name: 'Healthcare Service Management', desc: 'Monitoring auxiliary healthcare services, diagnostic & outpatient flows.' },
        { name: 'Resource Coordination', desc: 'Allocating equipment, inventory, bed capacity & staff scheduling.' },
        { name: 'Healthcare Communication', desc: 'Clear, ethical communication with patients, families & clinical teams.' },
        { name: 'Basic Healthcare Policy & Procedures', desc: 'Knowledge of hospital protocols, emergency responses & statutory guidelines.' },
        { name: 'Hospital Information Systems', desc: 'Familiarity with digital hospital management platforms & patient software.' }
      ]
    },
    {
      id: 'professional-skills',
      title: 'Management & Professional Skills',
      icon: <Users size={20} />,
      subtitle: 'Leadership, inter-personal coordination & organizational agility',
      skills: [
        { name: 'Team Coordination', desc: 'Harmonizing multi-disciplinary teams toward unified patient care goals.' },
        { name: 'Leadership', desc: 'Guiding operational tasks with clarity, initiative, and responsibility.' },
        { name: 'Time Management', desc: 'Prioritizing critical hospital tasks in high-tempo healthcare settings.' },
        { name: 'Problem Solving', desc: 'Analyzing bottleneck challenges and applying practical solutions.' },
        { name: 'Decision Making', desc: 'Evaluative judgment grounded in hospital guidelines and patient safety.' },
        { name: 'Communication', desc: 'Articulate verbal and written communication across organizational tiers.' },
        { name: 'Adaptability', desc: 'Swiftly adjusting to dynamic healthcare regulations and hospital needs.' },
        { name: 'Conflict Management', desc: 'De-escalating workplace & patient grievances with empathy and tact.' },
        { name: 'Organizational Skills', desc: 'Structuring schedules, documentation, and operational reports.' },
        { name: 'Professional Etiquette', desc: 'Upholding strict confidentiality, ethics, and professional conduct.' }
      ]
    },
    {
      id: 'office-tools',
      title: 'Office & Business Tools',
      icon: <LayoutGrid size={20} />,
      subtitle: 'Digital documentation, spreadsheets, presentations & financial records',
      skills: [
        { name: 'Microsoft Word', desc: 'Professional formatting of hospital reports, SOPs, letters & protocols.' },
        { name: 'Microsoft Excel', desc: 'Data organization, patient logs, basic statistical summaries & tables.' },
        { name: 'Microsoft PowerPoint', desc: 'Creating structured presentations for administrative meetings & training.' },
        { name: 'Tally', desc: 'Basic financial record-keeping, ledger tracking & billing awareness.' },
        { name: 'Documentation & Report Preparation', desc: 'Synthesizing operational data into clear managerial reports.' },
        { name: 'Data Entry & Management', desc: 'Accurate data input, verification & digital database upkeep.' },
        { name: 'Basic Computer Operations', desc: 'Proficiency in modern office software, emails & cloud collaboration.' }
      ]
    }
  ];

  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">02 / EXPERTISE</span>
          <h2>Areas of Expertise</h2>
          <p className="section-subtitle">
            Structured capabilities in hospital administration, healthcare management, operational strategy, and professional tools.
          </p>
        </div>

        <div className="expertise-tabs">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              className={`expertise-tab-btn ${activeCategory === idx ? 'active' : ''}`}
              onClick={() => setActiveCategory(idx)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-title">{cat.title}</span>
              <span className="tab-count">{cat.skills.length}</span>
            </button>
          ))}
        </div>

        <div className="expertise-display">
          <AnimatePresence mode="wait">
            <motion.div
              key={categories[activeCategory].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="expertise-category-card"
            >
              <div className="category-header">
                <div className="category-header-info">
                  <div className="category-badge">{categories[activeCategory].icon}</div>
                  <div>
                    <h3>{categories[activeCategory].title}</h3>
                    <p className="category-subtitle">{categories[activeCategory].subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="skills-grid">
                {categories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <div className="skill-card-top">
                      <CheckCircle2 size={16} className="skill-check-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
