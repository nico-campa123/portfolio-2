import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/hero-background.mp4" autoPlay loop muted />
      <div className="hero-content">
        <div className="hero-left">
          <h1>Hi, I'm Juan I. Developer and I build amazing web experiences.</h1>
        </div>
        <div className="hero-right">
          <img src="/images/profile.jpg" alt="Profile" className="profile-picture" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
