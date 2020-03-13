import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function Academic(props) {
  const { lang } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Academic</Typography>
    </div>
  );
}

Academic.proptypes = {
  lang: PropTypes.object.isRequired,
};

const ConnectedAcademic = connect(mapStateToProps)(Academic);
export default ConnectedAcademic;

function mapStateToProps(state) {
  return {
    lang: state.lang.academic,
  };
}
