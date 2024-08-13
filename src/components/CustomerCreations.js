import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CustomerCreations.css'; // Import custom styles
import ags from '../assets/svg/ags.jpg'; // Add your images here
import big from '../assets/svg/big.jpeg';
import cini from '../assets/svg/cini.jpeg';
import inox from '../assets/svg/OIP.jpeg';
import pvr from '../assets/svg/pvr.svg';

function CustomerCreations() {
    return (
        <div className="customer-creations-section py-5">
            <div className="container text-center">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-2 col-6 mb-3">
                        <img src={ags} alt="TNW Logo" className="img-fluid grayscale" />
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <img src={big} alt="GQ Logo" className="img-fluid grayscale" />
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <img src={cini} alt="Taxi Logo" className="img-fluid grayscale" />
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <img src={inox} alt="InVision Logo" className="img-fluid grayscale" />
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <img src={pvr} alt="Product Hunt Logo" className="img-fluid grayscale" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerCreations;
