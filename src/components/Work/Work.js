import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Work(props) {
  const classes = useStyles();

  document.title = 'Daniel Sosa | #Work';

  return (
    <div className={classes.root}>
      <Typography variant="h1">Work</Typography>
    </div>
  );
}

Work.proptypes = {
  lang: PropTypes.object.isRequired,
};

export default Work;
