import React from 'react';
import './Services.scss';

const services = [
    { title: "Electrics", icon: "⚡️", description: "Reliable electrical repairs and installations." },
    { title: "Plumbing", icon: "🚰🚿", description: "From leaks to installations, we handle all plumbing needs." },
    { title: "Silicone Sealant Renewal", icon: "✨", description: "Professional sealant replacement for bathrooms and kitchens." },
    { title: "Shower Screen Installation", icon: "🚿", description: "We install and repair shower screens." },
    { title: "Carpentry", icon: "🚪🌳", description: "Doors, furniture, and other woodwork projects." },
    { title: "Painting & Decorating", icon: "🎨", description: "Interior and exterior painting services." },
    { title: "Tiling", icon: "🔲", description: "Tile installation and repair for floors and walls." },
];

const ServiceCards = () => {
    return (
        <section className="service-cards">
            <h2 className="service-cards__title">Our Services</h2>
            <div className="service-cards__grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-card__icon">{service.icon}</div>
                        <h3 className="service-card__title">{service.title}</h3>
                        <p className="service-card__description">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="business-info">
                <h3>Business Overview</h3>
                <p>🛡 Fully insured</p>
                <p>⭐️⭐️⭐️⭐️⭐️ Home, Office, Apartment Renovations, including Auction Properties.</p>
                <p>Areas served: London UK and other</p>
                <p>🆓 FREE ESTIMATES | 👴🏼 10% Discount for regulars</p>
                <p>💳 All major credit and debit cards accepted.</p>
            </div>
        </section>
    );
};

export default ServiceCards;