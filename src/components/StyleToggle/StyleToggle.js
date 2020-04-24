import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';

function StyleToggle(props) {
  // dispatch is destructured here so it wont be passed to the ButtonBase component
  const { lang, color, dispatch, ...rest } = props;
  const head = React.useMemo(() => document.querySelector('head'), []);
  const [stylesheets, setStylesheets] = React.useState([]);
  const theme = useTheme();

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
    <ButtonBase
      focusRipple
      onClick={toggleStyles}
      color={color}
      style={{
        height: theme.spacing(6),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        backgroundColor: theme.defaultBackgroundColor,
        ...theme.typography.button,
      }}
      {...rest}
    >
      {lang.label}
    </ButtonBase>
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