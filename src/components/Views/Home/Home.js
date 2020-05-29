import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectHomeLang } from '../../../redux/selectors';
// Components
import Article from '../../Article/Article';

function Home() {
  const classes = useStyles();
  const lang = useSelector(selectHomeLang);
  const {
    title,
    articles: { whatWhy, accessibility, design, performance, tech },
  } = lang;

  document.title = `Daniel Sosa | ${title}`;

  return (
    <section className={classes.section}>
      <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
      <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
      <Article articleId="design" title={design.title} banner={design.banner} paragraphs={design.paragraphs} />
      <Article articleId="performance" title={performance.title} banner={performance.banner} paragraphs={performance.paragraphs} />
      <Article articleId="tech" title={tech.title} banner={tech.banner} paragraphs={tech.paragraphs} />
    </section>
  );
}

export default Home;