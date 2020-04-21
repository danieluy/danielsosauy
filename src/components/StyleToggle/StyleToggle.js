import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Button from '../Button/Button';

function StyleToggle(props) {
  // dispatch is destructured here so it wont be passed to the Button component
  const { lang, color, dispatch, ...rest } = props;
  const head = React.useMemo(() => document.querySelector('head'), []);
  const [stylesheets, setStylesheets] = React.useState([]);

  function toggleStyles() {
    if (!stylesheets.length) {
      const list = Array.from(head.querySelectorAll('style'));
      list.forEach(stylesheet => removeElement(stylesheet));
      setStylesheets(list);
    }
    else {
      stylesheets.forEach(stylesheet => head.appendChild(stylesheet));
      setStylesheets([]);
    }
    document.querySelector('header a[href="/"]').focus();
  }

  function removeElement(el) {
    el.parentNode.removeChild(el);
  }

  return (
    <Button onClick={toggleStyles} color={color} {...rest}>{lang.label}</Button>
  );
}

StyleToggle.propTypes = {
  lang: PropTypes.object.isRequired,
};

StyleToggle.defaultProps = {
  color: 'inherit',
};

const ConnectedStyleToggle = connect(mapStateToProps)(StyleToggle);
export default ConnectedStyleToggle;

function mapStateToProps(state) {
  return {
    lang: state.lang.styleToggle,
  };
}