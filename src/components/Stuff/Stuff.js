import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Stuff(props) {
  const { lang } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Stuff</Typography>
    </div>
  );
}

Stuff.proptypes = {
  lang: PropTypes.object.isRequired,
};

const ConnectedStuff = connect(mapStateToProps)(Stuff);
export default ConnectedStuff;

function mapStateToProps(state) {
  return {
    lang: state.lang.stuff,
  };
}
