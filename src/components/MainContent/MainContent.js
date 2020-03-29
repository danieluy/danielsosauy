import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
import { useSelector } from 'react-redux';
import { selectMainLang } from '../../redux/selectors';
// Components
import Button from '../Button/Button';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function MainContent(props) {
  const { content, aside, color } = props;
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
      if (asideOpen) {
        contentRef.current.style.transform = 'translateX(0)';
        asideRef.current.style.transform = 'translateX(0)';
        asideRef.current.children[0].style.animationName = 'rotate180Counterclockwise';
      }
      else {
        contentRef.current.style.transform = `translateX(-${theme.spacing(25)}px)`;
        asideRef.current.style.transform = `translateX(-${theme.spacing(25)}px)`;
        asideRef.current.children[0].style.animationName = 'rotate180Clockwise';
      }
      setAsideOpen(!asideOpen);
    }
  };

  window.toggleAsideOpen = toggleAsideOpen;

  console.log('aside', aside);

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
            aria-haspopup="menu"
            onClick={toggleAsideOpen}
          >
            <ArrowBackIcon />
          </Button>
          <ul role="menu" className={classes.ul}>
            {aside.map((el, i) => (
              <li>
                <el.type
                  {...el.props}
                  tabIndex={menuItemTabIndex}
                  key={`aside- item - ${i}`}
                  role="menuitem"
                />
              </li>
            ))}
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
