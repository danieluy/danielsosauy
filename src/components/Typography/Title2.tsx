import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Title2(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="h3" className={classes.title2} {...rest}>
      {children}
    </Typography>
  );
}

Title2.proptypes = {
  children: PropTypes.string.isRequired,
};

export default Title2;
