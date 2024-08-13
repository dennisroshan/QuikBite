import React from 'react';
import './BrandSection.css';
import phone from '../assets/svg/phoen.png';

function BrandSection() {
    return (
        <div className="brand-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 brand-image">
                        <img src={phone} alt="Brand Design" className="img-fluid" />
                    </div>
                    <div className="col-md-6 brand-text">
                        <h2>Beautiful memories with your loved ones</h2>
                        <div className="brand-features row">
                            <ul className="col-md-6">
                                <li>CHICKEN BURGER</li>
                                <li>FRENCH FRIES</li>
                                <li>PIZZA</li>
                                <li>NOODLES</li>
                            </ul>
                            <ul className="col-md-6">
                                <li>MOMOS</li>
                                <li>MOJITO</li>
                                <li>COKE</li>
                                <li>SAMOSAS</li>
                            </ul>
                        </div>
                        <a href="#menu" className="btn btn-danger">See Full menu</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandSection;
