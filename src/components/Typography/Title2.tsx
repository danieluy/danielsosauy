import React from 'react';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

interface Props {
  children: string,
}

function Title2(props: Props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="h3" className={classes.title2} {...rest}>
      {children}
    </Typography>
  );
}

export default Title2;
