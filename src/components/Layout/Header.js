import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import debounce from 'lodash/debounce';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Header({ children: Children }) {
  const classes = useStyles();
  const ref = useRef(null);
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [focusWithin, setFocusWhitin] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!downSm) setOpen(true);
    else setOpen(focusWithin);
  }, [downSm, focusWithin]);

  /**
   * Debounce so if blur happens but focus is still within, blur gets ignored
   */
  const debouncedSetFocusWhitin = debounce(focus => {
    setFocusWhitin(focus);
  });

  /**
   * Listen for focus within the main nav
   */
  useEffect(() => {
    ref.current.addEventListener('focus', _onFocus, true);
    ref.current.addEventListener('blur', _onBLur, true);

    function _onFocus() {
      debouncedSetFocusWhitin(true);
    }

    function _onBLur() {
      debouncedSetFocusWhitin(false);
    }

    return () => {
      ref.current.removeEventListener(_onFocus);
      ref.current.removeEventListener(_onBLur);
    };
  }, []);

  const width = useMemo(() => {
    if (!downSm) {
      return theme.spacing(25);
    }
    if (open) {
      return window.innerWidth;
    }
    return theme.spacing(6);
  }, [downSm, open]);

  return (
    <header ref={ref} className={classes.header} style={{ width }}>
      <Children.type {...Children.props} headerOpen={open} />
    </header>
  );
}

Header.proptypes = {
  children: PropTypes.element.isRequired,
};

export default Header;