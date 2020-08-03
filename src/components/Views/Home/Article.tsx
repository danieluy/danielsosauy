import React, { Fragment, useMemo } from 'react';
import useStyles from './styles';
// Components
import Title from '../../Typography/Title';
import Content from '../Partials/Content/Content';
import Markdown from '../../Markdown/Markdown';

interface Banner {
  src: string,
  alt: string,
}

interface Props {
  articleId: string,
  title: string,
  banner: Banner,
  paragraphs: string[],
}

function Article(props: Props) {
  const { articleId, title, banner, paragraphs } = props;
  const classes = useStyles();
  const markdown = useMemo(() => paragraphs.join('\n'), paragraphs);

  return (
    <Content component="article" aria-label={title} id={articleId}>
      <img src={banner.src} alt={banner.alt} className={classes.banner} />
      <Title tabIndex={0}>{title}</Title>
      <Markdown markdown={markdown} />
    </Content>
  );
}

export default Article;
