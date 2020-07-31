import React, { useEffect } from 'react';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectHomeLang } from '../../../redux/selectors';
// Components
import Article from '../../Article/Article';
import Markdown from '../../Markdown/Markdown';

function Home() {
  const classes = useStyles();
  const { hash } = useLocation();
  const lang = useSelector(selectHomeLang);
  const {
    title,
    articles: { whatWhy, accessibility, design, performance, tech },
  } = lang;

  useEffect(() => {
    document.title = `Daniel Sosa | ${title}`;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);


  return (
    <section className={classes.section}>
      <Markdown />
      <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
      <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
      <Article articleId="design" title={design.title} banner={design.banner} paragraphs={design.paragraphs} />
      <Article articleId="performance" title={performance.title} banner={performance.banner} paragraphs={performance.paragraphs} />
      <Article articleId="tech" title={tech.title} banner={tech.banner} paragraphs={tech.paragraphs} />
    </section>
  );
}

export default Home;
