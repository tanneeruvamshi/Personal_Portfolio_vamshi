import React from 'react';
import '../styles/About.css'; 

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="bio-section">
                <p>
                    Hello! I'm Ram, a Software Engineer based in Overland Park, Kansas. 
                    With a passion for creating innovative software solutions that improve everyday life, 
                    I have developed key projects like an automated testing framework that reduced bug rates by 30%.
                </p>
                <p>
                    My approach to personal and professional development is deeply influenced by Stephen R. Covey's "The 7 Habits of Highly Effective People," 
                    which has helped me enhance my strategic planning skills and effectively balance my professional commitments with personal goals.
                </p>
            </div>
            <div className="skills-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Project Management</li>
                    <li>Agile Methodologies</li>
                    <li>Continuous Integration</li>
                </ul>
            </div>
            <div className="education-section">
                <h2>Education</h2>
                <p>Masters of Science in Computer Science, Park University</p>
            </div>
        </div>
    );
}

export default About;
