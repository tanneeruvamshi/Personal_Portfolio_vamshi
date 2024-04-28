import React from 'react';
import ProjectCard from './ProjectCard'; 
import { projects } from '../data/ProjectsData'; 
import '../styles/Portfolio.css'; 

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h1>My Portfolio</h1>
            <p>Here are some of the projects I've worked on. Click on any project to learn more about it.</p>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
