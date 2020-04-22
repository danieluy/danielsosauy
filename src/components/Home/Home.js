import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
// Components
import MainContent from '../MainContent/MainContent';
import Article from '../Article/Article';
import StyleToggle from '../StyleToggle/StyleToggle';
import Button from '../Button/Button';


function Home() {
  const classes = useStyles();
  const lang = useSelector(state => state.lang.home);
  const {
    title,
    articles: { whatWhy, accessibility, design, performance, tech },
  } = lang;

  document.title = `Daniel Sosa | ${title}`;

  return (
    <MainContent
      content={(
        <section>
          <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
          <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
          <Article articleId="design" title={design.title} banner={design.banner} paragraphs={design.paragraphs} />
          <Article articleId="performance" title={performance.title} banner={performance.banner} paragraphs={performance.paragraphs} />
          <Article articleId="tech" title={tech.title} banner={tech.banner} paragraphs={tech.paragraphs} />
        </section>
      )}
      aside={[
        <nav className={classes.secNav} aria-label={lang.articlesNavigation}>
          <CustomNavLink articleId="what-why" title={whatWhy.title} />
          <CustomNavLink articleId="accessibility" title={accessibility.title} />
          <CustomNavLink articleId="design" title={design.title} />
          <CustomNavLink articleId="performance" title={performance.title} />
          <CustomNavLink articleId="tech" title={tech.title} />
        </nav>,
        <StyleToggle color="textPrimary" />,
      ]}
    />
  );

  function CustomNavLink({ articleId, title }) {
    return (
      <li>
        <Button tabIndex="-1">
          <a href={`#${articleId}`} className={classes.link}>{title}</a>
        </Button>
      </li>
    );
  }
}

export default Home;
