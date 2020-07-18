import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Paragraph(props) {
  const { children, error, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="p" className={`${classes.paragraph} ${error ? 'error' : ''}`} {...rest}>
      {children}
    </Typography>
  );
}

Paragraph.proptypes = {
  error: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
  error: false,
};

export default Paragraph;
