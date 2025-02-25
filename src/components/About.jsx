import React from 'react';
import './About.css';

export const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Peregian Digital Hub</h2>
        <div className="about-content">
          <div className="about-text">
            <p>The Peregian Digital Hub is a purpose-built facility designed to support and grow the Sunshine Coast's digital technology sector. Located in the heart of Peregian Beach, we provide a dynamic environment for digital businesses, entrepreneurs, and innovators.</p>
            <p>Our mission is to foster digital innovation, support local talent, and create opportunities for collaboration and growth in the technology sector.</p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h3>Modern Facilities</h3>
              <p>State-of-the-art workspaces and meeting rooms</p>
            </div>
            <div className="feature">
              <h3>Community</h3>
              <p>Vibrant network of digital professionals and entrepreneurs</p>
            </div>
            <div className="feature">
              <h3>Innovation</h3>
              <p>Supporting digital growth and technological advancement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 