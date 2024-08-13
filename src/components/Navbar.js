import React from 'react';
import WeatherWidget from './WeatherWidget';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">QUICK <span style={{ color: "white" }}>BITE</span></a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tools</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-light rounded-pill px-3" href="#" style={{ backgroundColor: "#FFD454" }}>Login</a>
                        </li>
                    </ul>
                    <div className="weather-widget-nav">
                        <WeatherWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
