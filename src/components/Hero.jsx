import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Welcome to Peregian Digital Hub</h1>
          <p>Your gateway to digital innovation and technology on the Sunshine Coast</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
        <div className="hero-image">
          <img src="/hero-image.jpg" alt="Peregian Digital Hub" />
        </div>
      </div>
    </section>
  );
}; 