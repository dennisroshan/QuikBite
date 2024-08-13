import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
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
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="hero-text">
                            <h1>THEATER FOOD DELIVERY</h1>
                            <p>MAKE YOUR MOVIE SPECIAL</p>
                            <a href="#services" className="btn btn-primary">ORDER NOW</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-carousel d-lg-block">
                            {slides.map((slide, index) => (
                                <div key={index} className={`hero-image-container ${index === currentSlide ? 'active' : ''}`}>
                                    <img
                                        src={slide}
                                        alt={`Slide ${index + 1}`}
                                        className="hero-image img-fluid"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
