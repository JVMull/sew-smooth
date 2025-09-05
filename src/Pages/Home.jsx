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
    // Mock service data - in a real app, this would come from an API
    const mockServices = [
      {
        id: 1,
        name: "Custom Dressmaking",
        description: "Bespoke dresses tailored to your exact measurements and style preferences.",
        price: "$120+",
        time: "2-3 weeks",
        image: "/Images/services/dressmaking.jpg",
        category: "clothing"
      },
      {
        id: 2,
        name: "Alterations & Repairs",
        description: "Professional alterations for perfect fit and repairs to extend garment life.",
        price: "$25+",
        time: "3-7 days",
        image: "/Images/services/alterations.jpg",
        category: "repairs"
      },
      {
        id: 3,
        name: "Quilting Services",
        description: "Custom quilt creation from your design or our patterns, heirloom quality.",
        price: "$200+",
        time: "4-6 weeks",
        image: "/Images/services/quilting.jpg",
        category: "home"
      },
      {
        id: 4,
        name: "Bridal Services",
        description: "Wedding dress alterations, custom veils, and bridal party attire.",
        price: "$150+",
        time: "4-8 weeks",
        image: "/Images/services/bridal.jpg",
        category: "special"
      },
      {
        id: 5,
        name: "Costume Creation",
        description: "Custom costumes for theater, cosplay, or special events.",
        price: "$180+",
        time: "3-5 weeks",
        image: "/Images/services/costumes.jpg",
        category: "special"
      },
      {
        id: 6,
        name: "Home Decor Sewing",
        description: "Custom curtains, pillows, upholstery, and other home decor items.",
        price: "$80+",
        time: "2-4 weeks",
        image: "/Images/services/home-decor.jpg",
        category: "home"
      }
    ];

    setServices(mockServices);
    // Set a random featured service
    setFeaturedService(mockServices[Math.floor(Math.random() * mockServices.length)]);
  }, []);

  return (
    <div className="services-storefront">
      {/* Hero Banner */}
      <section className="storefront-hero">
        <div className="hero-content">
          <h1>Professional Sewing Services</h1>
          <p>Quality craftsmanship for all your sewing needs</p>
          <Link to="/services" className="cta-button">Browse All Services</Link>
        </div>
        <div className="hero-image">
          <img src="/Images/services/hero-sewing.jpg" alt="Sewing professional at work" />
        </div>
      </section>

      {/* Featured Service */}
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

      {/* Services Grid */}
      <section className="services-grid-section">
        <h2>Our Services</h2>
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

      {/* How It Works */}
      <section className="process-section">
        <h2>How Our Services Work</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Consultation</h3>
            <p>Discuss your project needs and timeline</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Quote & Approval</h3>
            <p>Receive a detailed estimate for your review</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Creation</h3>
            <p>We craft your item with precision and care</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Delivery</h3>
            <p>Receive your finished piece, perfect and ready</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Contact us for a free consultation and quote</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">Get in Touch</Link>
          <Link to="/services" className="cta-button secondary">View All Services</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;