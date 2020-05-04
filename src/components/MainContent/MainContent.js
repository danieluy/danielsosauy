import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
import { useLocation } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
// Components
import Aside from './Aside';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';

function MainContent(props) {
  const { content, aside } = props;
  const [, height] = useWindowSize();
  const classes = useStyles();
  const theme = useTheme();
  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const { hash } = useLocation();

  useEffect(() => {
    containerRef.current.classList.add('animate-enter');
    window.setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.remove('animate-enter');
      }
    }, 300);
  }, []);

  useEffect(() => {
    if (hash) {
      const article = document.querySelector(hash);
      if (article) {
        article.scrollIntoView();
      }
    }
  }, [hash, mainRef.current]);

  const setContainerRef = useCallback(el => (containerRef.current = el), []);

  const handleAsideToggle = useCallback(open => {
    contentRef.current.style.transform = open
      ? 'translateX(0)'
      : `translateX(-${theme.spacing(theme.asideWidth)}px)`;
  }, [contentRef.current]);

  return (
    <PerfectScrollbar
      component="main"
      className={classes.main}
      style={{ height: height - theme.spacing(8) }}
      ref={mainRef}
      containerRef={setContainerRef}
    >
      <div className={aside ? classes.contentWithAside : classes.contentWithoutAside} ref={contentRef}>
        {content}
      </div>
      <Aside elements={aside} onToggleOpen={handleAsideToggle} />
    </PerfectScrollbar>
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

export function Subtitle({ children }) {
  return (
    <Typography component="span" variant="subtitle2" color="textSecondary">{children}</Typography>
  );
}
