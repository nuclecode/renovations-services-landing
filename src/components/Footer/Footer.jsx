import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log(formData);
        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-form" id="contact-form-section">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit" className="submit-button">Send</button>
                </form>
                <div className="contact-info">
                    <p>📞 Phone: <a href="tel:07482051203">07482051203</a></p>
                    <p>📧 Email: <a href="mailto:mega.lviv19@gmail.com">mega.lviv19@gmail.com</a></p>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" className="social-link">Facebook</a>
                    <a href="https://www.x.com" target="_blank" className="social-link">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" className="social-link">Instagram</a>
                    <a href="https://www.linkedin.com" target="_blank" className="social-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
