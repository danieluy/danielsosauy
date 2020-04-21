import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
// Components
import Aside from './Aside';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';

function MainContent(props) {
  const { content, aside } = props;
  const [, height] = useWindowSize();
  const classes = useStyles();
  const theme = useTheme();
  const mainRef = React.useRef(null);
  const contentRef = React.useRef(null);

  const handleAsideToggle = React.useCallback(open => {
    contentRef.current.style.transform = open
      ? 'translateX(0)'
      : `translateX(-${theme.spacing(25)}px)`;
  }, []);

  return (
    <main className={classes.main} style={{ height: height - theme.spacing(8) }} ref={mainRef}>
      <div className={classes.content} ref={contentRef}>
        {content}
      </div>
      <Aside elements={aside} onToggleOpen={handleAsideToggle} />
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
