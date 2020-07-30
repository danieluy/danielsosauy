import React from 'react';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Main({ children }: Props) {
  const classes = useStyles();
  const [, height] = useWindowSize();

  return (
    <main className={classes.main} style={{ height }}>
      {children}
    </main>
  );
}

export default Main;