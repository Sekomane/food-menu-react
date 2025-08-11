// src/pages/Home.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Featuresone from './components/Featuresone';
import Footer from './components/Footer';
import './RestaurantLandingPage.css';

export default function Home() {
  
  return (
    <div className="restaurant-container">
      <Navbar />
      <HeroSection />
      <Featuresone/>
      <Features />
      <Footer />
    </div>

    
  );
}