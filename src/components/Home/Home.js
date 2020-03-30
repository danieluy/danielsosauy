import React from 'react';
import { useSelector } from 'react-redux';
// Components
import MainContent from '../MainContent/MainContent';
import Article from '../Article/Article';
import StyleToggle from '../StyleToggle/StyleToggle';


function Home() {
  const lang = useSelector(state => state.lang.home);
  const { whatWhy, accessibility, aesthetics, performance } = lang.articles;

  return (
    <MainContent
      content={(
        <section>
          <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
          <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
          <Article articleId="aesthetics" title={aesthetics.title} banner={aesthetics.banner} paragraphs={aesthetics.paragraphs} />
          <Article articleId="performance" title={performance.title} banner={performance.banner} paragraphs={performance.paragraphs} />
        </section>
      )}
      aside={[<StyleToggle color="textPrimary" />]}
    />
  );
}

export default Home;
