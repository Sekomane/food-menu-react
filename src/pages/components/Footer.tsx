import React from 'react';

export default function Footer() {
   return (
    <footer className="footer">
      <div className="footer-left">
        <img 
          src={`${process.env.PUBLIC_URL}/BCO.10d80141-d81e-44d1-bdc4-056e1f015eb0.png`} 
          alt="Hello" 
          className="footer-main-img" 
        />
      </div>

      <div className="footer-benefits">
        <h4 className="footer-heading">OUR MENU BENEFIT</h4>
        <div className="benefit-list">
          <div className="benefit-item">
            <img 
              src={`${process.env.PUBLIC_URL}/fresh.png`} 
              alt="Fresh" 
              className="benefit-icon" 
            />
            <div>
              <p className="benefit-title">FRESH</p>
              <small>Plays grand no anomalies</small>
            </div>
          </div>
          <div className="benefit-item">
            <img 
              src={`${process.env.PUBLIC_URL}/vitamin.png`} 
              alt="Vitamin" 
              className="benefit-icon" 
            />
            <div>
              <p className="benefit-title">VITAMIN</p>
              <small>Nispen non procers</small>
            </div>
          </div>
          <div className="benefit-item">
            <img 
              src={`${process.env.PUBLIC_URL}/amic.png`} 
              alt="Organic" 
              className="benefit-icon" 
            />
            <div>
              <p className="benefit-title">ORE ANIC</p>
              <small>Towegales weruris</small>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-hours">
        <h4 className="footer-heading">OPENING HOURS</h4>
        <ul>
          <li><span>Monday</span> 8:00 to 17:00</li>
          <li><span>Tuesday</span> 8:00 to 17:00</li>
          <li><span>Wednesday</span> 8:00 to 19:00</li>
          <li><span>Thursday</span> 08:00 to 13:00</li>
        </ul>
      </div>
    </footer>
  );
};