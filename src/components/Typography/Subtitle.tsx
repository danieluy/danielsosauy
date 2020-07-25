import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Subtitle(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="p" className={classes.subtitle} {...rest}>
      {children}
    </Typography>
  );
}

Subtitle.proptypes = {
  children: PropTypes.string.isRequired,
};

export default Subtitle;
