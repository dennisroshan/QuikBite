import React from 'react';
import './CustomizationSection.css';
import burger from '../assets/svg/phone1.png';

function CustomizationSection() {
    return (
        <div className="customization-section">
            <div className="customization-content container">
                <div className="row align-items-center">
                    <div className="col-md-6 customization-text">
                        <h2>The only page for food order in theaters</h2>
                        <p>We’ll personally deliver the order to your seats in your movie screens.</p>
                    </div>
                    <div className="col-md-6 customization-image">
                        <img src={burger} alt="Phone with customization chat" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomizationSection;
