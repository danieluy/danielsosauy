import React from 'react';
import { useSelector } from 'react-redux';
// Components
import MainContent from '../MainContent/MainContent';
import Article from '../Article/Article';
import StyleToggle from '../StyleToggle/StyleToggle';


function Home() {
  const lang = useSelector(state => state.lang.home);
  const {
    title,
    articles: { whatWhy, accessibility, design, performance, tech }
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
        <StyleToggle color="textPrimary" />,
      ]}
    />
  );
}

export default Home;
