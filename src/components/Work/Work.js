import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Work(props) {
  const { lang } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Work</Typography>
    </div>
  );
}

Work.proptypes = {
  lang: PropTypes.object.isRequired,
};

const ConnectedContact = connect(mapStateToProps)(Work);
export default ConnectedContact;

function mapStateToProps(state) {
  return {
    lang: state.lang.contact,
  };
}
