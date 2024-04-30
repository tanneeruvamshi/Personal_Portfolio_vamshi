import React from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import { useTrail, animated } from 'react-spring';
import { projects } from '../data/ProjectsData'; 

const Portfolio = () => {
    // Define a trail for animations
    const trail = useTrail(projects.length, {
        from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    });

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <Container textAlign="center" style={{ marginTop: '4em', marginBottom: '4em' }}>
                <Segment raised>
                    <Header as="h2" content="My Portfolio" />
                    <p>Explore some of the projects I've worked on below:</p>
                    <Grid columns={3}>
                        {trail.map((style, index) => (
                            <Grid.Column key={projects[index].id}>
                                <animated.div style={style}>
                                    <Segment>
                                        <Header as="h3" content={projects[index].title} />
                                        <p>{projects[index].description}</p>
                                    </Segment>
                                </animated.div>
                            </Grid.Column>
                        ))}
                    </Grid>
                </Segment>
            </Container>
        
        </div>
    );
}

export default Portfolio;
