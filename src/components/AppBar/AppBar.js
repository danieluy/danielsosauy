import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function App(props) {
  const classes = useStyles();
  return (
    <header aria-label="Header" className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li} style={{ flexGrow: 1, margin: 0 }}>
            <NavLink exact to="/" aria-label="Home" className={classes.button} activeClassName="pressed">
              <Typography variant="h5" component="h1">www.danielsosa.uy</Typography>
            </NavLink>
          </li>
          <CustomLink href="/work">Work</CustomLink>
          <CustomLink href="/stuff">Stuff</CustomLink>
          <CustomLink href="/academic">Academic</CustomLink>
          <CustomLink href="/contact">Contact</CustomLink>
        </ul>
      </nav>
    </header>
  );
}

export default App;

App.propTypes = {};

function CustomLink({ children, href }) {
  const classes = useStyles();
  return (
    <li className={classes.li}>
      <NavLink to={href} className={classes.button} activeClassName="pressed">
        <Typography variant="button" component="span">{children}</Typography>
      </NavLink>
    </li>
  );
}

CustomLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
