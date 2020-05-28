import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Main({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      {children}
    </main>
  );
}

Main.proptypes = {
  children: PropTypes.element.isRequired,
};

export default Main;