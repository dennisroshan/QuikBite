import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <div className="footer-column">
                    <h4>VISIT</h4>
                    
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                  
                </div>
                <div className="footer-column">
                    <h4>contact</h4>
                    
                </div>
            </div>
            <div className="footer-bottom">
                <p>Terms of service</p>
                <p>Privacy policy</p>
            </div>
            <div className="footer-decorations">
                <div className="decoration decoration1"></div>
                <div className="decoration decoration2"></div>
                <div className="decoration decoration3"></div>
                <div className="decoration decoration4"></div>
            </div>
        </div>
    );
}

export default Footer;
