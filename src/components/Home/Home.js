import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
// Components
import Article from '../Article/Article';
import StyleToggle from '../StyleToggle/StyleToggle';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Home(props) {
  const lang = useSelector(state => state.lang.home);
  const theme = useTheme();
  const [width, height] = useWindowSize();
  const classes = useStyles();
  const { whatWhy, accessibility } = lang.articles;
  const underMd = useMediaQuery(theme.breakpoints.down('md'));
  const [asideOpen, setAsideOpen] = React.useState(false);
  const sectionRef = React.useRef(null);
  const asideRef = React.useRef(null);
  const style = {
    main: {
      height: height - theme.spacing(8),
    },
    section: {
      width: width - (underMd ? 0 : theme.spacing(25)),
    },
  };

  function toggleAsideOpen() {
    if (asideOpen) {
      sectionRef.current.style.transform = 'translateX(0)';
      asideRef.current.style.transform = 'translateX(0)';
    }
    else {
      sectionRef.current.style.transform = 'translateX(-200px)';
      asideRef.current.style.transform = 'translateX(-200px)';
    }
    setAsideOpen(!asideOpen);
  }

  window.toggleAsideOpen = toggleAsideOpen;

  return (
    <div className={classes.root}>
      <main className={classes.main} style={style.main}>
        <section className={classes.section} style={style.section} ref={sectionRef}>
          <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
          <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
        </section>
        <aside className={classes.aside} ref={asideRef}>
          <StyleToggle />
        </aside>
      </main>
    </div >
  );
}

export default Home;
