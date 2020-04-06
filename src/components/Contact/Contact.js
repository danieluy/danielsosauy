import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Contact(props) {
  const classes = useStyles();

  document.title = 'Daniel Sosa | #Contact';

  return (
    <div className={classes.root}>
      <Typography variant="h1">Contact</Typography>
    </div>
  );
}

Contact.proptypes = {
  lang: PropTypes.object.isRequired,
};

export default Contact;
