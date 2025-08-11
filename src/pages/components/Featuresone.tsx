// src/components/Featuresone.tsx
import React from 'react';

export default function Featuresone() {
  return (

     <section className="orange-section">
      <div className="orange-grid">
        
        <div className="orange-item">
          <h1>Orange Benefit</h1>
          <img src="orange-image.jpg" alt="Oranges" className="juice-image" />
        </div>

        <div className="content">
          <p className="title">Just reogine eseds and summer in golled <br/>quasiunp.</p>
          <button className="btn-primary">LEARN MORE</button>
        </div>

        <div className="orange-item">
          <img src="/orange-juice.png" alt="Mixed Berries" className="juice-image" />
        </div>

      </div>
    </section>

  );
}
