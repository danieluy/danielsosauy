import React from 'react';
import useStyles from './styles';

interface Props {
  children: JSX.Element,
}

function Footer({ children }: Props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {children}
    </footer>
  );
}

export default Footer;