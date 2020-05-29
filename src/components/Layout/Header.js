import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Header({ children }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      {children}
    </header>
  );
}

Header.proptypes = {
  children: PropTypes.element.isRequired,
};

export default Header;