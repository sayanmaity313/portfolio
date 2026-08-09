import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Mindset from './components/Mindset';
import Journey from './components/Journey';
import Strengths from './components/Strengths';
import Tools from './components/Tools';
import CareerDirection from './components/CareerDirection';
import PersonalDetails from './components/PersonalDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Mindset />
        <Journey />
        <Strengths />
        <Tools />
        <CareerDirection />
        <PersonalDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
