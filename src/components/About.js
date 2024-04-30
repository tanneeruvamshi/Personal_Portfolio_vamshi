import React, { useEffect, useRef } from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import Typical from 'react-typical';

const AnimatedCard = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ width: '100%' }}
        >
            <Card raised sx={{ minHeight: 280, borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#FFFFFF', overflow: 'hidden' }}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </motion.div>
    );
};

const About = () => {
    const targetRef = useRef(null);

    useEffect(() => {
        const animation = anime({
            targets: targetRef.current,
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#FFFFFF',
            duration: 2000,
            loop: true
        });
        return () => {
            animation.pause();
            animation.seek(0);
        };
    }, []);

    return (
        <Box sx={{ flexGrow: 1, padding: '64px 24px', background: '#FFFFFF', minHeight: '100vh' }}>
            <Typography variant="h3" gutterBottom style={{ color: '#333333', fontWeight: 'bold', textAlign: 'center' }}>About Me</Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <AnimatedCard>
                        <Typography variant="h5" style={{ color: '#333333', fontWeight: 'bold', marginBottom: '8px' }}>Vamshi Krishna Tanneeru</Typography>
                        <ul style={{ color: '#555555', paddingLeft: '20px' }}>
                            <li>Full Stack Developer based in Dallas, Texas</li>
                            <li>Over five years of experience, specializing in software solutions.</li>
                            <li>Expertise in architecting, developing, and optimizing applications.</li>
                            <li>Skilled in a broad spectrum of programming languages and frameworks including NodeJS, Java, Python, Angular, and React.</li>
                            <li>Distinguished by the ability to bridge complex business analysis with technical development.</li>
                        </ul>
                    </AnimatedCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <AnimatedCard>
                        <Typography variant="h5" style={{ color: '#333333', fontWeight: 'bold', marginBottom: '8px' }}>Key Technologies</Typography>
                        <ul style={{ color: '#555555', paddingLeft: '20px' }}>
                            <li>NodeJS, Java, Python, ExpressJS, Spring Boot</li>
                            <li>Angular, React, TypeScript, HTML5, CSS3</li>
                            <li>Bootstrap 3, MongoDB, Redis, MySQL</li>
                            <li>Google Cloud Platform (GCP), AWS (Amazon Web Services)</li>
                            <li>VSCode (Visual Studio Code), Eclipse, NetBeans, Heroku</li>
                        </ul>
                    </AnimatedCard>
                </Grid>
                <Grid item xs={12}>
                    <AnimatedCard>
                        <Typography variant="h5" style={{ color: '#333333', fontWeight: 'bold', marginBottom: '8px' }}>Education</Typography>
                        <ul style={{ color: '#555555', paddingLeft: '20px' }}>
                            <li>M.Sc. in Information System and Business Analytics, Park University, Expected 2024</li>
                            <li>M.Sc. in Software Engineering with Professional Placement, Kingston University, London, 2022</li>
                            <li>B. Tech in Computer Science & Engineering, JNTU Affiliated University, Hyderabad, India, 2018</li>
                        </ul>
                    </AnimatedCard>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" style={{ color: '#333333', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
                        <Typical
                            steps={['Good evening!', 5000, 'Welcome to my portfolio.', 2000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
