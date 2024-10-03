import React, { useState } from 'react';
import './Hero.scss';
import heroImage from '../../images/hero_image_renovation_house.jpg'; 
import HeroButton from '../HeroButton/HeroButton';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

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
                {!imageLoaded && <div className="hero__image-skeleton"></div>} {/* Skeleton Placeholder */}
                <img
                    src={heroImage}
                    alt="Man plastering a wall during home renovation"
                    className={`hero__image ${imageLoaded ? 'loaded' : 'loading'}`} 
                    onLoad={handleImageLoad}
                    rel="preload"
                />
            </div>
        </section>
    );
};

export default Hero;
