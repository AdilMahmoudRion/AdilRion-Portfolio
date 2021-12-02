import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

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
                    <Link  as={NavHashLink} to="/home#home">Home</Link>
                    <Link as={NavHashLink} to="/about#about">About</Link>
                    <Link as={NavHashLink} to="/service#service">Service</Link>
                    <Link as={NavHashLink} to="/projects#projects" >Portfolio</Link>
                    <Link as={NavHashLink} to="/blog#blog" >Blog</Link>
                    <Link as={NavHashLink} to="#">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;