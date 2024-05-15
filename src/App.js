import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import './styles/main.css';

// Importing libraries
import { WOW } from 'wowjs';
import ScrollReveal from 'scrollreveal';
import ScrollMagic from 'scrollmagic';

const App = () => {
    useEffect(() => {
        // Initialize WOW.js
        new WOW().init();

        // Initialize ScrollReveal
        ScrollReveal().reveal('.section', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });

        // Initialize ScrollMagic Controller
        const controller = new ScrollMagic.Controller();

        // Create ScrollMagic Scenes for each section
        new ScrollMagic.Scene({ triggerElement: "#home", duration: "50%" })
            .setClassToggle("#home", "fade-in") // Add class to Home
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#about", duration: "50%" })
            .setClassToggle("#about", "fade-in") // Add class to About
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#portfolio", duration: "50%" })
            .setClassToggle("#portfolio", "fade-in") // Add class to Portfolio
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#contact", duration: "50%" })
            .setClassToggle("#contact", "fade-in") // Add class to Contact
            .addTo(controller);

    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <div id="home" className="section home"><Home /></div>
                    <div id="about" className="section about"><About /></div>
                    <div id="portfolio" className="section portfolio"><Portfolio /></div>
                    <div id="contact" className="section contact"><ContactForm /></div>
                </main>
                {/* Optional Footer */}
            </div>
        </Router>
    );
};

export default App;
