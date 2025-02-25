import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 