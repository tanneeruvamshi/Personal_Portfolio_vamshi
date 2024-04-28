import React from 'react';

const ProjectCard = ({ title, description, imageUrl, link }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
        </div>
    );
}

export default ProjectCard;
