import React, { useState, useEffect } from 'react';
import './Slider.css';
import avatar1 from '../assets/svg/girls.jpeg';
import avatar2 from '../assets/svg/p1.jpg';
import avatar3 from '../assets/svg/p2.jpeg';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            avatar: avatar1,
            quote: "GOOD AND TASTY FOOD",
            name: "Valentyna Kuzmych",
            position: "⭐⭐⭐⭐⭐"
        },
        {
            avatar: avatar2,
            quote: "DELIVERED ON TIME",
            name: "Courtney Costrino",
            position: "⭐⭐⭐⭐⭐"
        },
        {
            avatar: avatar3,
            quote: "AMAZING CUSTOMER EXPERIENCE",
            position: "⭐⭐⭐"
        }
    ];

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
                    <div key={index} className={`slider-item ${index === currentSlide ? 'active' : ''}`}>
                        <div className="slider-item-content">
                            <div className="slider-avatar">
                                <img src={slide.avatar} alt={`${slide.name}'s Avatar`} />
                            </div>
                            <div className="slider-quote">
                                <p>"{slide.quote}"</p>
                            </div>
                            <div className="slider-user-info">
                                <strong>{slide.name}</strong>
                                <span>{slide.position}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-page">
                {slides.map((_, index) => (
                    <div 
                        key={index} 
                        className={`slider-page-item ${index === currentSlide ? 'active' : ''}`} 
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;

