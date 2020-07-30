import React from 'react';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

interface Props {
  children: string,
  tabIndex?: number,
}

function Title(props: Props) {
  const { children, tabIndex, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="h2" tabIndex={tabIndex} className={classes.title} {...rest}>
      {children}
    </Typography>
  );
}

export default Title;
