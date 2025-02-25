import React from 'react';
import { Navbar, Hero, Services, About, Contact, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 