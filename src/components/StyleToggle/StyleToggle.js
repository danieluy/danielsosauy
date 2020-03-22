import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

function StyleToggle(props) {
  const { lang } = props;
  const classes = useStyles();
  const [stylesheets, setStylesheets] = React.useState([]);

  function styleToggle() {
    if (!stylesheets.length) {
      const list = Array.from(document.querySelectorAll('head > style'));
      list.forEach(stylesheet => removeElement(stylesheet));
      setStylesheets(list);
    }
    else {
      const head = document.querySelector('head');
      stylesheets.forEach(stylesheet => head.appendChild(stylesheet));
      setStylesheets([]);
    }
    document.querySelector('header a[href="/"]').focus();
  }

  function removeElement(el) {
    el.parentNode.removeChild(el);
  }

  return (
    <button onClick={styleToggle} className={classes.button}>
      <Typography variant="button" component="span">{lang.label}</Typography>
    </button>
  );
}

StyleToggle.propTypes = {
  lang: PropTypes.object.isRequired,
};

const ConnectedStyleToggle = connect(mapStateToProps)(StyleToggle);
export default ConnectedStyleToggle;

function mapStateToProps(state) {
  return {
    lang: state.lang.styleToggle,
  };
}