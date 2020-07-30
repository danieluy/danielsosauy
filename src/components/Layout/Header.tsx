import React, { useEffect, useRef, useState, useMemo } from 'react';
import useStyles from './styles';
import debounce from 'lodash/debounce';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {
  children: JSX.Element,
}

function Header({ children: Children }: Props) {
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
    (ref.current as unknown as HTMLElement).addEventListener('focus', _onFocus, true);
    (ref.current as unknown as HTMLElement).addEventListener('blur', _onBLur, true);

    function _onFocus() {
      debouncedSetFocusWhitin(true);
    }

    function _onBLur() {
      debouncedSetFocusWhitin(false);
    }

    return () => {
      (ref.current as unknown as HTMLElement).removeEventListener('focus', _onFocus);
      (ref.current as unknown as HTMLElement).removeEventListener('blur', _onBLur);
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

export default Header;