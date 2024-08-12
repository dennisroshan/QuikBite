import React from 'react';
import './CustomerCreations.css';
import phone2 from '../assets/svg/phone1.png';
import pvr from '../assets/svg/pvr.svg';
import inox from '../assets/svg/OIP.jpeg';
import ags from '../assets/svg/ags.jpg';
import cini from '../assets/svg/cini.jpeg';

function CustomerCreations() {
    return (
        <div className="customer-creations-section">
            <div className="header">
                <h2>MENUS</h2>
                <p>BOTH VEG AND NON VEG</p>
            </div>
            <div className="editor-image">
                <img src={phone2} alt="Editor Screenshot" />
                <div className="labels">
                    <div className="label label-top-left">CHICKEN</div>
                    <div className="label label-top-right">NOODLES</div>
                    <div className="label label-bottom-left">HOT SOUPS</div>
                </div>
            </div>
            <div className="creations-grid">
                <h3>Latest customer creations</h3>
                <div className="grid">
                    <img src={pvr} alt="Customer Logo 1" />
                    <img src={ags} alt="Customer Logo 2" />
                    <img src={cini} alt="Customer Logo 3" />
                    <img src={inox} alt="Customer Logo 4" />
                </div>
            </div>
        </div>
    );
}

export default CustomerCreations;
