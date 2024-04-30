import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Slide } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slide direction="down" in={true} timeout={500}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} component={Link} to="/">
                            MyPortfolio
                        </Typography>
                        <nav>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                    <Link to="/" className={classes.link}>Home</Link>
                                </li>
                                <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                    <Link to="/about" className={classes.link}>About</Link>
                                </li>
                                <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                    <Link to="/portfolio" className={classes.link}>Portfolio</Link>
                                </li>
                                <li style={{ display: 'inline-block' }}>
                                    <Link to="/contact" className={classes.link}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </Toolbar>
                </AppBar>
            </Slide>
        </div>
    );
}

export default Header;
