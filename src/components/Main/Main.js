import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Main(props) {
  const { content, aside } = props;
  const [asideOpen, setAsideOpen] = React.useState(false);
  const [scrollbarWidth, setScrollbarWidth] = React.useState(getScrollbarWidth());
  const mainRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const asideRef = React.useRef(null);
  const theme = useTheme();
  const [width, height] = useWindowSize();
  const classes = useStyles();
  const underMd = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    setScrollbarWidth(getScrollbarWidth());
  }, [width, height]);

  console.log(scrollbarWidth);

  const style = {
    main: {
      height: height - theme.spacing(8),
      paddingRight: scrollbarWidth,
    },
    content: {
      flexShrink: 0,
      width: width - (underMd ? 0 : theme.spacing(25)),
    },
  };

  function toggleAsideOpen() {
    if (asideRef.current) {
      if (asideOpen) {
        contentRef.current.style.transform = 'translateX(0)';
        asideRef.current.style.transform = 'translateX(0)';
      }
      else {
        contentRef.current.style.transform = `translateX(-${theme.spacing(25)}px)`;
        asideRef.current.style.transform = `translateX(-${theme.spacing(25)}px)`;
      }
      setAsideOpen(!asideOpen);
    }
  }

  window.toggleAsideOpen = toggleAsideOpen;

  return (
    <main className={classes.main} style={style.main} ref={mainRef}>
      <div className={classes.content} ref={contentRef} style={style.content}>
        {content}
      </div>
      {!!aside && (
        <aside className={classes.aside} ref={asideRef}>
          {aside}
        </aside>
      )}
    </main>
  );
}

Main.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  aside: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Main;

/**
 * From https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
 */
function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}