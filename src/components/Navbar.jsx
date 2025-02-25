import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src="/logo.png" alt="Peregian Digital Hub" />
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Menu</span>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}; 