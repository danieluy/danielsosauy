import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Paragraph(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography component="p" className={classes.paragraph} {...rest}>
      {children}
    </Typography>
  );
}

Paragraph.proptypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
