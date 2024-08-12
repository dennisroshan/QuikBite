import React from 'react';
import './BrandSection.css';
import phone from '../assets/svg/phoen.png';

function BrandSection() {
    return (
        <div className="brand-section">
            <div className="brand-content">
                <div className="brand-image">
                    <img src={phone} alt="Brand Design" />
                </div>
                <div className="brand-text">
                    <h2>Beautiful memories with your loved ones</h2>
                    <div className="brand-features">
                        <ul>
                            <li>CHICKEN BURGER</li>
                            <li>FRENCH FRIES</li>
                            <li>PIZZA</li>
                            <li>NOODLES</li>
                        </ul>
                        <ul>
                            <li>MOMOS</li>
                            <li>MOJITO</li>
                            <li>COKE</li>
                            <li>SAMOSAS</li>
                        </ul>
                    </div>
                    <a href="#menu" className="btn">See Full menu</a>
                </div>
            </div>
        </div>
    );
}

export default BrandSection;
