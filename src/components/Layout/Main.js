import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';

function Main({ children }) {
  const classes = useStyles();
  const [, height] = useWindowSize();

  return (
    <main className={classes.main} style={{ height }}>
      {children}
    </main>
  );
}

Main.proptypes = {
  children: PropTypes.element.isRequired,
};

export default Main;