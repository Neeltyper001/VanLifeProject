import React from 'react'
import './index.css';
const About = () => {
  return (
    <section>
      <div className="image-container">
        <img className="about-image" src="/images/about-image.png" alt="about" />
      </div>

      <div className="about-container">
        <h1 className="about-container-heading">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="about-container-para">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>

    <div className="about-container-card-parent">
      <div className="about-container-card">
        <h1>Your destination is waiting.
        Your van is ready.</h1>
        <button>Explore our vans</button>
      </div>
    </div>
        
    </section>
  )
}

export default About