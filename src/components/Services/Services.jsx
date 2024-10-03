import React from 'react';
import './Services.scss';

const services = [
    { title: "24hr Emergency Call Out", icon: "🆘", description: "We provide emergency services around the clock." },
    { title: "Electrics", icon: "⚡️", description: "Reliable electrical repairs and installations." },
    { title: "Handyman Services", icon: "🙌🏼", description: "General maintenance and repairs around the house." },
    { title: "Plumbing", icon: "🚰🚿", description: "From leaks to installations, we handle all plumbing needs." },
    { title: "Silicone Sealant Renewal", icon: "✨", description: "Professional sealant replacement for bathrooms and kitchens." },
    { title: "Shower Screen Installation", icon: "🚿", description: "We install and repair shower screens." },
    { title: "Carpentry", icon: "🚪🌳", description: "Doors, furniture, and other woodwork projects." },
    { title: "CCTV & Security", icon: "🎦", description: "Security alarm and CCTV installations." },
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
                <p>📧 Email: info@gmail.com</p>
                <p>🛡 Fully insured | 🚛 Licensed waste carriers | 🎫 24hr EMERGENCY CALL OUT</p>
                <p>⭐️⭐️⭐️⭐️⭐️ Read up-to-date reviews from our vast client database.</p>
                <p>Areas served: Bexley, Bexleyheath, Welling, Plumstead, Woolwich, Greenwich, Charlton, and more.</p>
                <p>⏰ 24 HOUR EMERGENCY CALL OUT</p>
                <p>🆓 FREE ESTIMATES | 👴🏼 10% Discount for senior citizens (quote YPD17)</p>
                <p>💳 All major credit and debit cards accepted. Contactless payments available.</p>
            </div>
        </section>
    );
};

export default ServiceCards;




// import React from 'react';

// function Services() {
//   return (
//     <div className="services">
//       <h2>Our Services</h2>
//       <ul>
//         <li>Apartment Renovation</li>
//         <li>Painting</li>
//         <li>Electrical Work</li>
//       </ul>
//     </div>
//   );
// }

// export default Services;