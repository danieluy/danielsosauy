import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
import { useSelector } from 'react-redux';
import { selectMainLang } from '../../redux/selectors';
import { KEY_CODE } from '../../utils';
// Components
import Button from '../Button/Button';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function MainContent(props) {
  const { content, aside } = props;
  const lang = useSelector(selectMainLang);
  const [width, height] = useWindowSize();
  const classes = useStyles();
  const theme = useTheme();
  const isUnderMd = useMediaQuery(theme.breakpoints.down('md'));
  const [asideOpen, setAsideOpen] = React.useState(false);
  const mainRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const asideRef = React.useRef(null);

  const menuItemTabIndex = React.useMemo(() => {
    if (!isUnderMd) {
      return '0';
    }
    return asideOpen ? '0' : '-1';
  }, [isUnderMd, asideOpen]);

  const style = {
    main: {
      height: height - theme.spacing(8),
    },
  };

  const toggleAsideOpen = () => {
    if (isUnderMd && asideRef.current) {
      window.asideRef = asideRef.current;
      if (asideOpen) {
        contentRef.current.style.transform = 'translateX(0)';
        asideRef.current.style.transform = 'translateX(0)';
        asideRef.current.children[0].style.animationName = 'rotate180Counterclockwise';
      }
      else {
        contentRef.current.style.transform = `translateX(-${theme.spacing(25)}px)`;
        asideRef.current.style.transform = `translateX(-${theme.spacing(25)}px)`;
        asideRef.current.children[0].style.animationName = 'rotate180Clockwise';
        window.setTimeout(() => {
          asideRef.current.children[1].children[0].firstElementChild.focus();
        }, 300);
      }
      setAsideOpen(!asideOpen);
    }
  };

  const handleKeyDown = evt => {
    if (evt.which !== KEY_CODE.TAB) {
      evt.preventDefault();
    }

    switch (evt.which) {
      case KEY_CODE.ENTER:
      case KEY_CODE.SPACEBAR:
        console.log('ENTER');
        break;
      case KEY_CODE.ARROW_UP:
      case KEY_CODE.ARROW_LEFT:
        console.log('BACK');
        break;
      case KEY_CODE.ARROW_DOWN:
      case KEY_CODE.ARROW_RIGHT:
        console.log('FORWARD');
        break;
      default:
        break;
    }
  };

  return (
    <main className={classes.main} style={style.main} ref={mainRef}>
      <div className={classes.content} ref={contentRef}>
        {content}
      </div>
      {!!aside && (
        <aside className={classes.aside} ref={asideRef}>
          <Button
            className={`${classes.asideButton} ${asideOpen ? 'asideOpen' : ''}`}
            role="button"
            aria-label={lang.menuButton.ariaLabel}
            title={lang.menuButton.ariaLabel}
            id="aside-menu-button"
            aria-haspopup="true"
            aria-controls="aside-menu"
            onClick={toggleAsideOpen}
          >
            <ArrowBackIcon />
          </Button>
          <ul
            className={classes.ul}
            id="aside-menu"
            role="menu"
            aria-labelledby="aside-menu-button"
          >
            {aside.map((El, i) => (
              <li
                key={`aside-item-li-${i}`}
                onClick={toggleAsideOpen}
                onKeyDown={handleKeyDown}
              >
                <El.type
                  {...El.props}
                  tabIndex={menuItemTabIndex}
                />
              </li>
            ))}
            <li
              onClick={toggleAsideOpen}
              onKeyDown={handleKeyDown}
            >
              <p tabIndex={menuItemTabIndex}>Test</p>
            </li>
          </ul>
        </aside>
      )}
    </main>
  );
}

MainContent.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  aside: PropTypes.arrayOf(PropTypes.element),
};

export default MainContent;
