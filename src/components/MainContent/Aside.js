import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectMainLang, selectStatus } from '../../redux/selectors';
import { KEY_CODE } from '../../utils';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Aside(props) {
  const { elements, onToggleOpen } = props;
  const [asideOpen, setAsideOpen] = React.useState(false);
  const lang = useSelector(selectMainLang);
  const status = useSelector(selectStatus);
  const classes = useStyles();
  const theme = useTheme();
  const isUnderMd = useMediaQuery(theme.breakpoints.down('md'));
  const isUnderSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isUnderXs = useMediaQuery(theme.breakpoints.down('xs'));
  const asideRef = React.useRef(null);
  const meuButtonRef = React.useRef(null);
  const [asideItems, setAsideItems] = React.useState([]);
  const [focusIdx, setFocusIdx] = React.useState(0);

  React.useEffect(() => {
    if (asideRef.current) {
      const liItems = Array.from(asideRef.current.children[0].children);
      setAsideItems(liItems.map(li => li.firstElementChild));
    }
  }, [asideRef.current]);

  React.useEffect(() => {
    onToggleOpen(!asideOpen);
  }, [asideOpen]);

  // Defines whether or not items are focusable
  const menuItemTabIndex = React.useMemo(() => {
    if (!isUnderMd) {
      return '0';
    }
    return asideOpen ? '0' : '-1';
  }, [isUnderMd, asideOpen]);

  const deltaTranslateButton = React.useMemo(() => {
    if (isUnderXs) return 23.5;
    if (isUnderSm) return 25.5;
    return 27.5;
  }, [isUnderSm, isUnderXs]);

  const closeAside = React.useCallback(() => {
    asideRef.current.style.transform = 'translateX(0)';
    meuButtonRef.current.style.transform = 'translateX(0)';
    meuButtonRef.current.children[0].style.animationName = 'rotate180Counterclockwise';
    setAsideOpen(false);
  });

  const openAside = React.useCallback(() => {
    asideRef.current.style.transform = `translateX(-${theme.spacing(25)}px)`;
    meuButtonRef.current.style.transform = `translateX(-${theme.spacing(deltaTranslateButton)}px)`;
    meuButtonRef.current.children[0].style.animationName = 'rotate180Clockwise';
    window.setTimeout(() => {
      asideItems[0].focus();
    }, 300);
    setAsideOpen(true);
  });

  const toggleAsideOpen = React.useCallback(() => {
    if (isUnderMd && asideRef.current) {
      if (asideOpen) {
        closeAside();
      }
      else {
        openAside();
      }
    }
  }, [isUnderMd, asideRef.current, asideOpen]);

  const focusForward = () => {
    const nextIdx = focusIdx + 1;
    if (asideItems[nextIdx]) {
      asideItems[nextIdx].focus();
    }
    else {
      asideItems[0].focus();
    }
  };

  const focusBackward = () => {
    const nextIdx = focusIdx - 1;
    if (asideItems[nextIdx]) {
      asideItems[nextIdx].focus();
    }
    else {
      asideItems[asideItems.length - 1].focus();
    }
  };

  const handleKeyDown = React.useCallback(evt => {
    switch (evt.which) {
      case KEY_CODE.ENTER:
      case KEY_CODE.SPACEBAR:
        toggleAsideOpen();
        break;
      case KEY_CODE.ARROW_UP:
      case KEY_CODE.ARROW_LEFT:
        evt.preventDefault();
        focusBackward();
        break;
      case KEY_CODE.ARROW_DOWN:
      case KEY_CODE.ARROW_RIGHT:
        evt.preventDefault();
        focusForward();
        break;
      default:
        break;
    }
  }, [focusIdx, asideItems]);

  const handleFocus = React.useCallback(idx => () => setFocusIdx(idx), []);

  const handleBlur = React.useCallback(() => {
    // closeAside();
  }, []);

  if (!elements) {
    return null;
  }

  return (
    <React.Fragment>
      {status.styles && (
        <ButtonBase
          focusRipple
          className={`${classes.asideButton} ${asideOpen ? 'asideOpen' : ''}`}
          role="button"
          aria-label={lang.menuButton.ariaLabel}
          title={lang.menuButton.ariaLabel}
          component="button"
          id="aside-menu-button"
          aria-haspopup="true"
          aria-controls="aside-menu"
          onClick={toggleAsideOpen}
          ref={meuButtonRef}
        >
          <ArrowBackIcon aria-hidden role="none" />
        </ButtonBase>
      )}
      <aside
        className={classes.aside}
        ref={asideRef}
        onBlur={handleBlur}
      >
        <ul
          className={classes.ul}
          id="aside-menu"
          role="menu"
          aria-labelledby="aside-menu-button"
        >
          {elements.map((El, i) => (
            <li
              key={`aside-item-li-${i}`}
              onClick={closeAside}
              onKeyDown={handleKeyDown}
            >
              <El.type
                {...El.props}
                tabIndex={menuItemTabIndex}
                onFocus={handleFocus(i)}
              />
            </li>
          ))}
        </ul>
      </aside>
    </React.Fragment>
  );
}

Aside.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.element),
  onToggleOpen: PropTypes.func.isRequired,
};

export default Aside;
