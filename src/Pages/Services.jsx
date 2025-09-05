// Pages/Services.jsx
import React, { useState, useEffect } from 'react';
import ServiceCard from '../Components/ServiceCard';
import ServicesList from '../Components/ServicesList';

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

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
      },
      {
        id: 7,
        name: "Embroidery Services",
        description: "Custom embroidery for garments, hats, and promotional items.",
        price: "$35+",
        time: "1-2 weeks",
        image: "/Images/services/embroidery.jpg",
        category: "decoration"
      },
      {
        id: 8,
        name: "Leatherwork",
        description: "Custom leather goods including bags, wallets, and accessories.",
        price: "$150+",
        time: "3-6 weeks",
        image: "/Images/services/leatherwork.jpg",
        category: "accessories"
      }
    ];

    setServices(mockServices);
    setFilteredServices(mockServices);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'repairs', name: 'Alterations & Repairs' },
    { id: 'home', name: 'Home Decor' },
    { id: 'special', name: 'Special Occasion' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'decoration', name: 'Decoration' }
  ];

  const filterServices = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === categoryId));
    }
  };

  return (
    <div className="services-page">
      <div className="background-container"></div>
      
      <div className="page-header">
        <h1>Our Sewing Services</h1>
        <p>Professional craftsmanship for all your sewing needs</p>
      </div>

      <section className="category-filter">
        <h2>Filter by Category</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => filterServices(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <ServicesList services={filteredServices} title={null} />

      <section className="service-process">
        <h2>How Our Service Works</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-icon">📋</div>
            <h3>1. Consultation</h3>
            <p>Contact us to discuss your project, timeline, and budget</p>
          </div>
          <div className="step">
            <div className="step-icon">✂️</div>
            <h3>2. Creation</h3>
            <p>We carefully craft your item with attention to detail</p>
          </div>
          <div className="step">
            <div className="step-icon">✅</div>
            <h3>3. Quality Check</h3>
            <p>We thoroughly inspect every piece before delivery</p>
          </div>
          <div className="step">
            <div className="step-icon">🎁</div>
            <h3>4. Delivery</h3>
            <p>Receive your beautifully finished item, ready to use</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Get a free consultation and quote for your custom sewing project</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Request a Quote</button>
          <button className="cta-button secondary">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Services;