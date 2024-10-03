import React from 'react';
import './Hero.scss';
import heroImage from '../../images/hero_image_renovation_house.jpg'; 
import HeroButton from '../HeroButton/HeroButton';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Transform Your Home with Our Renovation & Electrical Services</h1>
                <p className="hero__description">
                    Whether it's a complete home makeover or electrical rewiring, we provide top-quality, reliable, and affordable services.
                    Let us help you create the space of your dreams with precision and care.
                </p>
                <HeroButton />
            </div>
            <div className="hero__image-container">
                <img src={heroImage} alt="Man painting a wall during home renovation" className="hero__image" />
            </div>
        </section>
    );
};

export default Hero;
