import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Title(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="h2" className={classes.title} {...rest}>
      {children}
    </Typography>
  );
}

Title.proptypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
