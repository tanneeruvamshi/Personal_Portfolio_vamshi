import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Automatically updates the year

    return (
        <footer>
            <p>© {currentYear} MyPortfolio. All rights reserved.</p>
            <ul className="social-links">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
