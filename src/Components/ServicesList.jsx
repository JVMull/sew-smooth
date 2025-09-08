// Components/ServicesList.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesList = ({ services, title = "Our Services", showButton = true }) => {
  return (
    <section className="services-grid-section">
      {title && <h2>{title}</h2>}
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            showButton={showButton}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;