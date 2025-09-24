// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import axios from 'axios';

function Home() {
  const [services, setServices] = useState([]);
  const [featuredService, setFeaturedService] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check session status from local storage or API
    const session = localStorage.getItem('session');
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Mock service data
    const mockServices = [
      {
        id: 1,
        name: "Tailoring",
        description: "Bespoke dresses tailored to your exact measurements and style preferences.",
        price: "$120+",
        time: "2-3 weeks",
        image: "/Images/services/dressmaking.jpg",
        category: "clothing"
      },
      {
        id: 2,
        name: "Embroidery",
        description: "Professional alterations for perfect fit and repairs to extend garment life.",
        price: "$25+",
        time: "3-7 days",
        image: "/Images/services/alterations.jpg",
        category: "repairs"
      },
      
    ];

    setServices(mockServices);
    setFeaturedService(mockServices[Math.floor(Math.random() * mockServices.length)]);
  }, []);

  return (
    <div className="services-storefront">
      {/* Background container with image */}
      <div className="background-container"></div>
      
      {/* Content with semi-transparent backgrounds */}
      <section className="storefront-hero">
        <div className="hero-content">
          <h1>Wardrobe Personalization Services</h1>
          <p>Make your clothes fit you!</p>
          <Link to="/Services" className="cta-button">Browse All Services</Link>
        </div>
        <div className="hero-image">
          <img src="/Images/services/hero-sewing.jpg" alt="Sewing professional at work" />
        </div>
      </section>

      {featuredService && (
        <section className="featured-service">
          <h2>Featured Service</h2>
          <div className="featured-card">
            <div className="featured-image">
              <img src={featuredService.image} alt={featuredService.name} />
            </div>
            <div className="featured-details">
              <h3>{featuredService.name}</h3>
              <p className="service-description">{featuredService.description}</p>
              <div className="service-meta">
                <div className="price">Starting at {featuredService.price}</div>
                <div className="time">Approx. {featuredService.time}</div>
              </div>
              <button className="inquiry-btn">Request Information</button>
            </div>
          </div>
        </section>
      )}

      <section className="services-grid-section">
        <h2>Our Service Categories</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <button className="service-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2>How Our Services Work</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Order</h3>
            <p>Complete our order form</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Consultation</h3>
            <p>Discuss your project needs and timeline</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Approval</h3>
            <p>Receive a detailed estimate for your review</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Creation</h3>
            <p>We craft your item with precision and care</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>Delivery</h3>
            <p>Receive your finished piece, perfect and ready</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"The custom dress fit perfectly and was exactly what I envisioned. Highly recommend!"</p>
            <div className="customer">- Sarah M.</div>
          </div>
          <div className="testimonial">
            <p>"They brought new life to my favorite jacket with expert repairs. Will definitely return."</p>
            <div className="customer">- James T.</div>
          </div>
          <div className="testimonial">
            <p>"The quilt they made for my granddaughter's wedding was absolutely stunning."</p>
            <div className="customer">- Margaret L.</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Personalization Journey?</h2>
        <p>Complete our order form, and reach out at contact@sew-smooth.com for inquiries.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">Get in Touch</Link>
          <Link to="/services" className="cta-button secondary">View All Services</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;