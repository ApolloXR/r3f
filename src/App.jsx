import React, { Suspense } from 'react';
import './App.css';

import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Placeholder asset data - replace with actual paths and details
  // Ensure these models exist in public/models/ or update paths accordingly.
  const assets = [
    { id: 1, name: 'Drill', modelPath: '/models/drill.glb', description: 'A high-poly model of a futuristic surveillance drone, designed for aerial reconnaissance.' },
    { id: 2, name: 'Hammer', modelPath: '/models/hammer.glb', description: 'Detailed concept of an advanced cybernetic eye with augmented reality capabilities.' },
    { id: 3, name: 'Tape Measure', modelPath: '/models/tapeMeasure.glb', description: 'An interactive holographic workstation UI, showcasing data visualization in 3D space.' },
  ];

  return (
    <>
      <header className="app-header">
        <div className="container">
          <div className="logo">Apollo<span>XR</span></div>
          <nav className="nav-links">
            <a href="#hero">Home</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Suspense 
          fallback={
            <div style={{ 
              height: '100vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              fontSize: '2rem', 
              color: '#e0e0e0', 
              backgroundColor: '#050505' 
            }}>
              Loading ApolloXR Experience...
            </div>
          }
        >
          <Hero />
          <Showcase assets={assets} />
          <ContactForm />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
