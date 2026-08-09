import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-tag">09 / CONTACT</span>
          <h2 className="contact-headline">Let's Build Better Healthcare Experiences.</h2>
          <p className="contact-subtext">
            Whether it's an internship opportunity, operational collaboration, or a professional conversation regarding hospital administration, I would be glad to connect.
          </p>
        </div>

        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-methods">
            
            <a href="mailto:sayanmaity313@gmail.com" className="contact-method-box">
              <div className="method-icon">
                <Mail size={24} />
              </div>
              <div className="method-info">
                <span className="method-label">Direct Email</span>
                <span className="method-value">sayanmaity313@gmail.com</span>
              </div>
              <ArrowUpRight size={20} className="method-arrow" />
            </a>

            <a href="tel:7365886808" className="contact-method-box">
              <div className="method-icon">
                <Phone size={24} />
              </div>
              <div className="method-info">
                <span className="method-label">Phone Number</span>
                <span className="method-value">+91 7365886808</span>
              </div>
              <ArrowUpRight size={20} className="method-arrow" />
            </a>

            <div className="contact-method-box disabled">
              <div className="method-icon">
                <MapPin size={24} />
              </div>
              <div className="method-info">
                <span className="method-label">Current Address</span>
                <span className="method-value">Biharipur, Chorpalia, Purba Medinipur, West Bengal 721448</span>
              </div>
            </div>

          </div>

          <div className="contact-actions-panel">
            <a href="mailto:sayanmaity313@gmail.com" className="btn btn-primary btn-lg">
              <Mail size={18} />
              Email Sayan
            </a>
            <a href="tel:7365886808" className="btn btn-secondary btn-lg">
              <Phone size={18} />
              Call Sayan
            </a>
          </div>

          <div className="contact-footer-note">
            <CheckCircle2 size={16} className="note-check" />
            <span>Open to hospital administration &amp; healthcare management roles across India.</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
