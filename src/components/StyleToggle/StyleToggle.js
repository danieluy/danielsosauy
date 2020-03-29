import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Button from '../Button/Button';

function StyleToggle(props) {
  const { lang, ...rest } = props;
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
    <Button onClick={styleToggle} {...rest}>{lang.label}</Button>
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