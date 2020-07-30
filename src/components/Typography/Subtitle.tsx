import React from 'react';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

interface Props {
  children: string,
}

function Subtitle(props: Props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="p" className={classes.subtitle} {...rest}>
      {children}
    </Typography>
  );
}

export default Subtitle;
