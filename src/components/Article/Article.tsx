import * as React from 'react';
import useStyles from './styles';
// Components
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import Content from '../Views/Partials/Content/Content';

interface Props {
  articleId: string,
  title: string,
  banner: Banner,
  paragraphs: string[],
}

interface Banner {
  src: string,
  alt: string,
}

function Article(props: Props) {
  const { articleId, title, banner, paragraphs } = props;
  const classes = useStyles();

  return (
    <Content component="article" aria-label={title} id={articleId}>
      <img src={banner.src} alt={banner.alt} className={classes.banner} />
      <Title tabIndex={0}>{title}</Title>
      {paragraphs.map((paragraph, i) => renderParagraph(paragraph, i))}
    </Content>
  );

  function renderParagraph(paragraph: string, key: number) {
    const markdownLinks = (paragraph.match(/\[([^\]]*)\]\(([^)]+)\)/g) as RegExpMatchArray);
    const textWithLinks = splitByLink(paragraph, markdownLinks, 0);
    return (
      <Paragraph key={key} aria-label="#article body">
        {textWithLinks}
      </Paragraph>
    );
  }

  function splitByLink(fullText: string, links: RegExpMatchArray, idx: number): Array<string | JSX.Element> {
    if (!links) {
      return [fullText];
    }
    const link = links[idx];
    const realLink = parseLink(link);
    const [a, b] = fullText.split(link);
    if (idx < links.length - 1) {
      const splitB = b ? splitByLink(b, links, idx + 1) : [];
      return [a, realLink].concat(splitB);
    }
    return [a, realLink, b];
  }

  function parseLink(link: string): JSX.Element {
    const match = link.match(/\[(.*)\]\((.+)\)/);
    const label = match ? match[1] : '';
    const url = match ? match[2] : '';
    return <a href={url} target="_bank" className={classes.link} key={label}>{label || url}</a>;
  }
}

export default Article;
