import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import useStyles from './styles';
import useWindowSize from '../../react-hooks/useWindowSize';
// Components
import Article from '../Article/Article';
import StyleToggle from '../StyleToggle/StyleToggle';

function Home(props) {
  const lang = useSelector(state => state.lang.home);
  const classes = useStyles();
  const [width, height] = useWindowSize();
  const { whatWhy, accessibility } = lang.articles;

  return (
    <div className={classes.root}>
      <main className={classes.main} style={{ height: height - 112 }}>
        <section className={classes.section}>
          <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
          <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
        </section>
        <aside className={classes.aside}>
          <StyleToggle />
        </aside>
      </main>
    </div>
  );
}

export default Home;
