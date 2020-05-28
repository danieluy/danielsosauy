import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography>
        {'<Footer />'}
      </Typography>
    </footer>
  );
}

export default Footer;