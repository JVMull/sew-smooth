// Components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, showButton = true }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.name} />
      </div>
      <div className="service-info">
        <h3>{service.name}</h3>
        <p className="service-description">{service.description}</p>
        <div className="service-meta">
          <div className="price">Starting at {service.price}</div>
          <div className="time">Approx. {service.time}</div>
        </div>
        {showButton && (
          <div className="service-footer">
            <span className="service-category">{service.category}</span>
            <button className="service-btn">Learn More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;