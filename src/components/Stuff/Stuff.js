import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Stuff(props) {
  const classes = useStyles();

  document.title = 'Daniel Sosa | #Stuff';

  return (
    <div className={classes.root}>
      <Typography variant="h1">Stuff</Typography>
    </div>
  );
}

Stuff.proptypes = {
  lang: PropTypes.object.isRequired,
};

export default Stuff;
