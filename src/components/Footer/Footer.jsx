import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
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
                    <a href="https://www.facebook.com" className="social-link">Facebook</a>
                    <a href="https://www.x.com" className="social-link">Twitter</a>
                    <a href="https://www.instagram.com" className="social-link">Instagram</a>
                    <a href="https://www.linkedin.com" className="social-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
