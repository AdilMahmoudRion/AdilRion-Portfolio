import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        Adil Mahmoud Rion
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <a href="#" target="_blank">Home</a>
                    <a href="#" target="_blank">About</a>
                    <a href="#">Service</a>
                    <a href="#" target="_blank">Portfolio</a>
                    <a href="#" target="_blank">Blog</a>
                    <a href="#" target="_blank">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;