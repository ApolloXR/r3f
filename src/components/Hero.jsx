import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{textAlign: 'center'}}>
        <h1 className="hero-title" style={{ fontSize: '4.5rem', marginBottom: '20px', lineHeight: '1.2' }}>
          Apollo<span style={{color: '#00aaff'}}>XR</span>: The Future of 3D Assets
        </h1>
        <p className="hero-subtitle section-subtitle" style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '40px' }}>
          We craft hyper-realistic 3D models using cutting-edge computer vision and our bespoke multi-camera rig. Innovation and quality, delivered.
        </p>
        <a href="#showcase" className="button button-primary" style={{padding: '15px 35px', fontSize: '1.1rem'}}>
          Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
