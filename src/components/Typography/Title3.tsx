import React, { Fragment } from 'react';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';


interface Props {
  children: string,
}
function Title3(props: Props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="h4" className={classes.title3} {...rest}>
      {children}
    </Typography>
  );
}

export default Title3;
