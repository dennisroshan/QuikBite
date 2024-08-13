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
            quote: "I'm not a designer, when I had to make a logo I found myself staring at a blank screen. Brandmark made the process actually enjoyable",
            name: "Valentyna Kuzmych",
            position: "CEO, PubLaw Project"
        },
        {
            avatar: avatar2,
            quote: "I tried other logo makers and Brandmark is the best value. Quality is exceptional and includes a complete branding solution for my company",
            name: "Courtney Costrino",
            position: "Founder, Noble Tide LLC"
        },
        {
            avatar: avatar3,
            quote: "I was afraid to pay thousands for a logo that didn't turn out right for my business. The Brandmark team helped me create a logo that I love!",
            name: "Sarah Locatelli",
            position: "Founder, Loctia"
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

