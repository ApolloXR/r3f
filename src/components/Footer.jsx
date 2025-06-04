import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} ApolloXR. All rights reserved.</p>
        <div style={{marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '20px'}}>
          <a href="#privacy" style={{color: '#888', fontSize: '0.85rem'}}>Privacy Policy</a> 
          <span style={{color: '#555'}}>|</span>
          <a href="#terms" style={{color: '#888', fontSize: '0.85rem'}}>Terms of Service</a>
          <span style={{color: '#555'}}>|</span>
          <a href="#contact" style={{color: '#888', fontSize: '0.85rem'}}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
