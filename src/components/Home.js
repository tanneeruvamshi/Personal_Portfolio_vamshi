import React, { useEffect, useState } from 'react';
import {
  Avatar, Typography, Grid, Container, Button, Box, Card, CardContent, CardMedia,
} from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profilePicture from '../data/Images/A7408710.jpeg';
import keelaaImage from '../data/Images/Keelaa.png';
import keepWellMantrasImage from '../data/Images/KeepwellMantras.png';

const vibrantTheme = createTheme({
  palette: {
    type: 'light',
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
    padding: theme.spacing(3),
    color: theme.palette.grey[800],
    background: 'linear-gradient(to right, #ffffff, #e3f2fd)',
    backgroundAttachment: 'fixed',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: `5px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(2),
  },
  section: {
    margin: theme.spacing(5, 0),
    textAlign: 'center',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    '& svg': {
      marginRight: theme.spacing(1),
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  button: {
    marginTop: theme.spacing(3),
    borderRadius: 25,
    padding: '10px 20px', // Reduced padding
    transition: 'background-color 0.3s',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'inline-block', // Changed to inline-block
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 500, // Reduced font weight
    fontSize: '1rem', // Reduced font size
    textAlign: 'center',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity: 0.3,
  },
  container: {
    position: 'relative',
  },
  headline: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(3),
  },
  paragraph: {
    textAlign: 'left',
    lineHeight: 1.6,
    color: theme.palette.grey[700],
  },
  card: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardMedia: {
    height: 140,
  },
  cardContent: {
    flexGrow: 1,
    minHeight: 250,
  },
  contactIcons: {
    marginTop: theme.spacing(2),
    '& svg': {
      margin: theme.spacing(1),
      fontSize: '1.5rem',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    display: 'flex',
    justifyContent: 'center',
  },
}));

const TypingAnimation = ({ roles }) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (deleting) {
        setDisplayText(currentRole.substring(0, typingIndex - 1));
        setTypingIndex(typingIndex - 1);
      } else {
        setDisplayText(currentRole.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }

      if (!deleting && typingIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && typingIndex === 0) {
        setDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingSpeed = deleting ? 50 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [roles, roleIndex, typingIndex, deleting]);

  return <span>{displayText}</span>;
};

const Home = () => {
  const classes = useStyles();
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Backend Developer', 'Frontend Developer', 'Blockchain Developer'];

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ThemeProvider theme={vibrantTheme}>
      <Box className={classes.bgImage} />
      <Container maxWidth="lg" className={`${classes.root} ${classes.container}`}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} component={motion.div} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <Avatar alt="Vamshi Krishna Tanneeru" src={profilePicture} className={classes.avatar} />
            <Typography variant="h4" gutterBottom className={classes.headline}>
              Vamshi Krishna Tanneeru
            </Typography>
            <Typography variant="body1" className={classes.section}>
              <TypingAnimation roles={roles} />
            </Typography>
            <Typography className={classes.contactLink}>
              <FontAwesomeIcon icon={faPhone} /> 913-351-0468
            </Typography>
            <Typography className={classes.contactLink}>
              <FontAwesomeIcon icon={faEnvelope} /> vamshitanneeruus@gmail.com
            </Typography>
            <Box className={classes.contactIcons}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/tanneeruvamshi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} component={motion.div} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <Typography variant="h6" className={classes.section}>About Me</Typography>
            <Typography variant="body1" paragraph className={classes.paragraph}>
              As a skilled Full Stack Developer, I leverage a broad technology stack to build seamless applications that scale across ReactJS, NodeJS, and more. My deep interest in blockchain technology drives me to constantly explore innovative solutions in this rapidly evolving field.
            </Typography>
            <Typography variant="h6" className={classes.section}>Projects & Contributions</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={keelaaImage}
                    title="Keelaa"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography component="h5" variant="h5">
                      Keelaa
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Engineered an integrated registration suite for running events with ReactJS and NodeJS, improving the user journey from sign-up to participation. Facilitated real-time reporting and optimized sports equipment distribution with GraphQL, and deployed a high-quality chip timing system for live event result updates.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={keepWellMantrasImage}
                    title="Keep Well Mantras"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography component="h5" variant="h5">
                      Keep Well Mantras
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Crucial in crafting the Keep Well Mantras fitness and nutrition platform, integrating Java Spring Boot and ReactJS for an intuitive user interface. Developed an extensive workout video library and dramatically enriched the platform by integrating a diverse array of fitness and nutrition programs. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<FontAwesomeIcon icon={faFileDownload} style={{ marginRight: '10px' }} />}
                href={require('../data/Images/Tanneeru_v5_Resume.pdf')}
                download
              >
                Download Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
