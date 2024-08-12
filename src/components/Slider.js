import React, { useState, useEffect } from 'react';
import './Slider.css';



import slide1 from '../assets/svg/girls.jpeg';
import slide2 from '../assets/svg/p1.jpg';
import slide3 from '../assets/svg/p2.jpeg';


function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slide1, slide2, slide3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="slider-container">
            <div className="slider">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
