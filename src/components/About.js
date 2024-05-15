import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import { FaNodeJs, FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaPython, FaDatabase, FaDocker } from 'react-icons/fa';

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
    flexGrow: 1,
    padding: theme.spacing(8, 2),
    background: 'linear-gradient(to right, #ffffff, #e3f2fd)',
    minHeight: '100vh',
  },
  headline: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#fff',
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  icon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  skillName: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  progressValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
}));

const skills = [
  { name: 'NodeJS', level: 9, icon: <FaNodeJs /> },
  { name: 'ReactJS', level: 9, icon: <FaReact /> },
  { name: 'AngularJS', level: 8, icon: <FaAngular /> },
  { name: 'JavaScript', level: 10, icon: <FaJsSquare /> },
  { name: 'HTML', level: 10, icon: <FaHtml5 /> },
  { name: 'CSS', level: 9, icon: <FaCss3Alt /> },
  { name: 'Java', level: 8, icon: <FaJava /> },
  { name: 'Python', level: 9, icon: <FaPython /> },
  { name: 'SQL', level: 8, icon: <FaDatabase /> },
  { name: 'Docker', level: 7, icon: <FaDocker /> },
];

const AnimatedCard = ({ children }) => {
  const springProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 170, friction: 26 },
  });

  return <animated.div style={springProps}>{children}</animated.div>;
};

const SkillRating = ({ name, level, icon }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <AnimatedCard>
        <Card className={classes.card}>
          <div className={classes.icon}>{icon}</div>
          <Typography variant="h6" className={classes.skillName}>
            {name}
          </Typography>
          <Typography className={classes.progressValue}>{level}/10</Typography>
        </Card>
      </AnimatedCard>
    </Grid>
  );
};

const About = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={vibrantTheme}>
      <Box className={classes.root}>
        <Typography variant="h3" className={classes.headline}>Skills</Typography>
        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill) => (
            <SkillRating key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default About;
