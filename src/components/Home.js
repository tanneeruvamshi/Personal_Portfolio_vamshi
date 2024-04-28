import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectsData'; 
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro-section">
                <h1>Welcome to My Portfolio</h1>
                <p>Hello! I’m Ram, a passionate Software Engineer. Explore my work and get in touch!</p>
                <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
            </div>
            <div className="featured-projects">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.slice(0, 3).map(project => ( 
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                    <Link to="/portfolio" className="btn btn-secondary">View All Projects</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
