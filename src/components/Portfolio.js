import React, { useState } from 'react';
import { Container, Grid, Card, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const vibrantTheme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      color: '#666',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: theme.spacing(8, 2),
    background: 'linear-gradient(to right, #ffffff, #e3f2fd)',
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  header: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    background: theme.palette.background.paper,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
    position: 'relative',
    perspective: '1000px',
    cursor: 'pointer',
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper, // Ensure consistent background color
  },
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  cardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper, // Ensure consistent background color
    color: theme.palette.text.primary,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  cardDescription: {
    color: theme.palette.text.secondary,
  },
  flipIcon: {
    alignSelf: 'flex-end',
    fontSize: '1.5rem',
    color: theme.palette.secondary.main,
  },
}));

const projects = [
  {
    id: 1,
    title: 'Keelaa',
    description: 'Engineered an integrated registration suite for running events with ReactJS and NodeJS, improving the user journey from sign-up to participation. Facilitated real-time reporting and optimized sports equipment distribution with GraphQL, and deployed a high-quality chip timing system for live event result updates. Implemented a user-friendly interface to ensure seamless registration and participation experience for users.',
  },
  {
    id: 2,
    title: 'Keep Well Mantras',
    description: 'Crucial in crafting the Keep Well Mantras fitness and nutrition platform, integrating Java Spring Boot and ReactJS for an intuitive user interface. Developed an extensive workout video library and dramatically enriched the platform by integrating a diverse array of fitness and nutrition programs. Enhanced user engagement through interactive and personalized content.',
  },
  {
    id: 3,
    title: 'ChainChat',
    description: 'Developed a decentralized forum platform on the EOSIO blockchain, allowing users to securely create, share, and discuss content with immutable records. Focused on user privacy and data integrity. Built features to support real-time interactions and community-driven discussions. Utilized smart contracts to manage forum operations securely.',
  },
  {
    id: 4,
    title: 'Secure Passport Scanner',
    description: 'Built a secure passport scanner application using Django and Google Dialogflow, enhancing the efficiency and security of document processing in airports. Implemented advanced security measures to ensure data protection. Designed a user-friendly interface for seamless interaction. Integrated machine learning algorithms to improve document recognition accuracy.',
  },
];

const ProjectCard = ({ project, onClick, flipped }) => {
  const classes = useStyles();

  const flipStyles = useSpring({
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  });

  return (
    <animated.div className={classes.cardInner} style={flipStyles} onClick={onClick}>
      <div className={classes.cardFront}>
        <Typography variant="h5" className={classes.cardTitle}>
          {project.title}
        </Typography>
        <Typography variant="body1" className={classes.cardDescription}>
          {project.description}
        </Typography>
        <FontAwesomeIcon icon={faSyncAlt} className={classes.flipIcon} />
      </div>
      <div className={classes.cardBack}>
        <Typography variant="h5" className={classes.cardTitle}>
          {project.title}
        </Typography>
        <Typography variant="body1" className={classes.cardDescription}>
          {project.description}
        </Typography>
        <FontAwesomeIcon icon={faSyncAlt} className={classes.flipIcon} />
      </div>
    </animated.div>
  );
};

const Portfolio = () => {
  const classes = useStyles();
  const [flipped, setFlipped] = useState([false, false]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState([0, 1]);

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });

    setCurrentProjectIndex((prev) => {
      const newIndex = (prev[index] + 2) % projects.length;
      const newProjectIndex = [...prev];
      newProjectIndex[index] = newIndex;
      return newProjectIndex;
    });
  };

  return (
    <ThemeProvider theme={vibrantTheme}>
      <div className={classes.root}>
        <Container textAlign="center" className={classes.container}>
          <Typography variant="h2" className={classes.header}>
            Projects
          </Typography>
          <Grid container spacing={4} className={classes.cardGrid}>
            {[0, 1].map((i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Card className={classes.card}>
                  <ProjectCard
                    project={projects[currentProjectIndex[i]]}
                    onClick={() => handleFlip(i)}
                    flipped={flipped[i]}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;
