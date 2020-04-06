import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Academic(props) {
  const classes = useStyles();

  document.title = 'Daniel Sosa | #Academic';

  return (
    <div className={classes.root}>
      <Typography variant="h1">Academic</Typography>
    </div>
  );
}

Academic.proptypes = {
  lang: PropTypes.object.isRequired,
};

export default Academic;
