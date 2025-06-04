import React, { Suspense } from 'react';
import AssetViewer from './AssetViewer.jsx';

const Showcase = ({ assets }) => {
  return (
    <section id="showcase" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Our Creations</h2>
        <p className="section-subtitle">
          Experience the detail and precision of our 3D assets. Each model is ready for integration and optimized for performance.
        </p>
        <div className="asset-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="asset-card"
              style={{
                backgroundColor: '#181818',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'left',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Suspense
                fallback={
                  <div style={{
                    height: '300px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#222',
                    borderRadius: '8px',
                    color: '#888',
                    marginBottom: '15px'
                  }}>
                    Loading 3D Model...
                  </div>
                }
              >
                <AssetViewer modelPath={asset.modelPath} />
              </Suspense>
              <h3 style={{ fontSize: '1.5rem', color: '#00aaff', marginBottom: '10px', marginTop: '20px' }}>{asset.name}</h3>
              <p style={{ fontSize: '1rem', color: '#bbbbbb', marginBottom: '20px', minHeight: '60px', flexGrow: 1 }}>{asset.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
