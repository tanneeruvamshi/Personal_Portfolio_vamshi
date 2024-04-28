// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">MyPortfolio</Link> {/* Ensure this is clickable and navigates correctly */}
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
