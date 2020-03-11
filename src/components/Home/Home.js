import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
// Material UI
import Typography from '@material-ui/core/Typography';

function Home(props) {
  const { name, description, version } = props;
  const classes = useStyles();
  const [width, height] = useWindowSize();

  return (
    <div className={classes.root} style={{ width, height }}>
      <Typography variant="h1">Home</Typography>
      <Typography variant="h2">{description}</Typography>
      <Typography variant="h3">{name} v{version}</Typography>
    </div>
  );
}

Home.proptypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

const ConnectedHome = connect(mapStateToProps)(Home);
export default ConnectedHome;

function mapStateToProps(state) {
  return {
    ...state.app,
  }
}
