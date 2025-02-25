import React from 'react';
import './Services.css';

export const Services = () => {
  const services = [
    {
      title: "Coworking Space",
      description: "Modern, flexible workspace for digital professionals and teams",
      icon: "🏢"
    },
    {
      title: "Meeting Rooms",
      description: "Professional meeting spaces with modern AV equipment",
      icon: "🤝"
    },
    {
      title: "Events & Workshops",
      description: "Regular industry events, workshops, and networking opportunities",
      icon: "📅"
    },
    {
      title: "Business Support",
      description: "Mentoring and support for digital startups and entrepreneurs",
      icon: "💡"
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 