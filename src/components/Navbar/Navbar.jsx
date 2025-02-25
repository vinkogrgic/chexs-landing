import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Aussie Angels Logo" />
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 