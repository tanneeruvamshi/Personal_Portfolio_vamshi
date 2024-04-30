import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/Footer.css'; // Ensure your CSS is properly set up for new styles

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Automatically updates the year
    const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 });

    return (
        <animated.footer style={fade}>
            <p>© {currentYear} MyPortfolio. All rights reserved.</p>
            <ul className="social-links">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </animated.footer>
    );
}

export default Footer;
