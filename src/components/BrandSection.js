import React from 'react';
import './BrandSection.css'; // Make sure to create this CSS file
import phone from '../assets/svg/phoen.png'
function BrandSection() {
    return (
        <div className="brand-section">
            <div className="brand-content">
                <div className="brand-image">
                    <img src={phone}alt="Brand Design" />
                </div>
                <div className="brand-text">
                    <h2>Beautiful memories with you loved ones</h2>
                   
                    <div className="brand-features">
                        <ul>
                            <li><i className="icon"></i> CHICKEN BURGER</li>
                            <li><i className="icon"></i> FRIENCH FRIES</li>
                            <li><i className="icon"></i> PIZZA</li>
                            <li><i className="icon"></i> NOODLES</li>
                        </ul>
                        <ul>
                            <li><i className="icon"></i> MOMOS</li>
                            <li><i className="icon"></i> MOJITO</li>
                            <li><i className="icon"></i> COKE</li>
                            <li><i className="icon"></i> SAMASAS</li>
                        </ul>
                    </div>
                    <a href="#assets" className="btn">See Full menu</a>
                </div>
            </div>
        </div>
    );
}

export default BrandSection;
