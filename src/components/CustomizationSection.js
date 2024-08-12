import React from 'react';
import './CustomizationSection.css'; // Make sure to create this CSS file
import burger from '../assets/svg/bun (2).png'

function CustomizationSection() {
    return (
        <div className="customization-section">
            <div className="customization-content">
                <div className="customization-text">
                    <h2>The only page for the food order in theaters</h2>
                    <p>We’ll personally deliver the order to your seats in your movie screens </p>
                </div>
                <div className="customization-image">
                    <img src={burger} alt="Phone with customization chat" />
                </div>
            </div>
        </div>
    );
}

export default CustomizationSection;
