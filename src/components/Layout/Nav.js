import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Nav() {
  const classes = useStyles();
  
  return (
    <nav className={classes.nav}>
      <Typography>
        {'<Nav />'}
      </Typography>
    </nav>
  );
}

export default Nav;