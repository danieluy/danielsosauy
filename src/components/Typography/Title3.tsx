import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Title3(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="h4" className={classes.title3} {...rest}>
      {children}
    </Typography>
  );
}

Title3.proptypes = {
  children: PropTypes.string.isRequired,
};

export default Title3;
