import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Footer({ children }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {children}
    </footer>
  );
}

Footer.proptypes = {
  children: PropTypes.element.isRequired,
};

export default Footer;