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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function MainContent(props) {
  const { content, aside } = props;
  const lang = useSelector(selectMainLang);
  console.log('lang', lang);
  const [asideOpen, setAsideOpen] = React.useState(false);
  const mainRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const asideRef = React.useRef(null);
  const theme = useTheme();
  const [width, height] = useWindowSize();
  const classes = useStyles();

  const style = {
    main: {
      height: height - theme.spacing(8),
    },
  };

  function toggleAsideOpen() {
    if (asideRef.current) {
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
  }

  window.toggleAsideOpen = toggleAsideOpen;

  console.log('aside', aside);

  return (
    <main className={classes.main} style={style.main} ref={mainRef}>
      <div className={classes.content} ref={contentRef}>
        {content}
      </div>
      {!!aside && (
        <aside className={classes.aside} ref={asideRef} role="menu">
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
          {/**
           * #####       ####
           *   #    ###  #   #  ###
           *   #   #   # #   # #   #
           *   #   #   # #   # #   #
           *   #    ###  ####   ###
           *
           * ToDo: handle tabindexes
           */}
          {aside.map((el, i) => <el.type {...el.props} tabIndex="0" key={`aside- item - ${i}`} />)}
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
