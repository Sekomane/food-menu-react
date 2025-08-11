import React from 'react';
//import saladImage from './assets/header.png';


export default function HeroSection() {
  return (
    <section className="hero"
      style={{
        backgroundImage: `url('/header.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
       height: '30vh',
       paddingLeft: '30px',
       
       
      }}

    >
      <div className="hero-text">
        <p>Premium Restaurant</p>
        <h1>Anida<br />Dedelay</h1>
        <p>BEST HEALTHY SALAD SERVED<br />IN OUR RESTAURANT</p>
        <button className="btn-primary">LEARN MORE</button>
      </div>
    </section>
  );
}