import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectStyleToggleLang, selectStatus } from '../../redux/selectors';
import { enableStyles, disableStyles } from '../../redux/actions';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';

function StyleToggle(props) {
  const { color, ...rest } = props;
  const head = React.useMemo(() => document.querySelector('head'), []);
  const [stylesheets, setStylesheets] = React.useState([]);
  const theme = useTheme();
  const dispatch = useDispatch();
  const lang = useSelector(selectStyleToggleLang);
  const status = useSelector(selectStatus);

  function toggleStyles() {
    if (!stylesheets.length) {
      const list = Array.from(head.querySelectorAll('style'));
      list.forEach(stylesheet => removeElement(stylesheet));
      setStylesheets(list);
      dispatch(disableStyles());
    }
    else {
      stylesheets.forEach(stylesheet => head.appendChild(stylesheet));
      setStylesheets([]);
      dispatch(enableStyles());
    }
    document.querySelector('header a[href="/"]').focus();
  }

  function removeElement(el) {
    el.parentNode.removeChild(el);
  }

  if (status.styles) {
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

  return (
    <button onClick={toggleStyles}>{lang.label}</button>
  );
}

StyleToggle.propTypes = {
  lang: PropTypes.object.isRequired,
};

StyleToggle.defaultProps = {
  color: 'inherit',
};

export default StyleToggle;
