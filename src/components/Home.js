import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion';
import profilePicture from '../data/Images/3526096B-D696-4B83-9116-ACA0B90388F1_1_105_c.jpeg';
import '../styles/Home.css';

const useStyles = makeStyles((theme) => ({
  profilePicture: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: '0 auto',
  },
  introText: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="home-container">
      <div className="intro-section">
        <Avatar alt="Profile Picture" src={profilePicture} className={classes.profilePicture} />
        <div className={classes.introText}>
          <h1>Vamshi Krishna Tanneeru</h1>
          <p>Dallas, Texas, US | 913-351-0468 | vamshitanneeruus@gmail.com</p>
          <p>
            Accomplished Full Stack Developer with over five years of experience in technology and innovation.
          </p>
          <motion.div
            initial="initial"
            animate="animate"
            variants={buttonVariants}
            transition={{ delay: 0.5 }}
          >
            <Button component={Link} to="/portfolio" variant="contained" color="primary" className={classes.button}>
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Remove the Featured Projects section */}
    </div>
  );
};

export default Home;
