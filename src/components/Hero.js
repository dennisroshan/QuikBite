import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import your dummy images for the carousel
import slide1 from '../assets/svg/bun (2).png';
import slide2 from '../assets/svg/coke.png';
import slide3 from '../assets/svg/pizz (1).png';

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slide1, slide2, slide3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="hero-container">
            <div className="hero">
                <div className="hero-text">
                    <h1>Create a unique, professional logo for your business</h1>
                    <p>Kickstart your brand with business card designs, social media graphics, app icons, letterheads, and more.</p>
                    <a href="#services" className="btn">Create my logo</a>
                </div>
                <div className="hero-carousel">
    {slides.map((slide, index) => (
        <div key={index} className={`hero-image-container ${index === currentSlide ? 'active' : ''}`}>
            <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="hero-image"
            />
            {slide === undefined && <div className="fallback-text">Image {index + 1} not found</div>}
        </div>
    ))}
</div>
            </div>
        </div>
    );
}

export default Hero;
