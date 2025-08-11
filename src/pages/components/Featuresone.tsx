import React from 'react';

export default function Featuresone() {
return (
    <section className="orange-section">
      <div className="orange-grid three-column-layout">
        {/* Left Image */}
        <div className="orange-item left-image">
          <img 
            src={`${process.env.PUBLIC_URL}/orange-image.jpg`} 
            alt="Oranges" 
            className="juice-image" 
          />
        </div>

        {/* Center Content */}
        <div className="content">
          <h1 className="image-header">Orange Benefit</h1>
          <p className="title">
            Just reogine eseds and summer in golled quasiunp.
          </p>
          <button className="btn-primary">LEARN MORE</button>
        </div>

        {/* Right Image - This will be pushed to far right */}
        <div className="orange-item right-image">
          <img 
            src={`${process.env.PUBLIC_URL}/orange-juice.png`} 
            alt="Orange Juice" 
            className="juice-image" 
          />
        </div>
      </div>
    </section>
  );
};
