import React from 'react';
import './Header.scss';

const Header = () => {
    const scrollToContactForm = () => {
        const contactSection = document.getElementById('contact-form-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo" onClick={scrollToContactForm} style={{ cursor: 'pointer' }}>
                    <h1>Lexi</h1>
                </div>
                <div className="contact-info">
                    <p className="phone-number">Call Us: 07482 051203</p>
                    <a href="tel:+447482051203" className="call-button">
                        Call Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
