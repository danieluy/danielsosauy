import React, { Fragment } from 'react';
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
      <Paragraphs paragraphs={paragraphs} />
    </Content>
  );
}

export default Article;

interface ParagraphsProps {
  paragraphs: string[],
}

function Paragraphs({ paragraphs }: ParagraphsProps) {
  return (
    <Fragment>
      {paragraphs.map((paragraph, i) => {
        const markdownLinks = (paragraph.match(/\[([^\]]*)\]\(([^)]+)\)/g) as RegExpMatchArray);
        const textWithLinks = splitByLink(paragraph, markdownLinks, 0);
        return (
          <Paragraph key={i} aria-label="#article body">
            {textWithLinks}
          </Paragraph>
        );
      })}
    </Fragment>
  );
}

function splitByLink(fullText: string, links: RegExpMatchArray, idx: number)
  : Array<string | JSX.Element> {
  if (!links) {
    return [fullText];
  }
  const link = links[idx];
  const realLink = <ParagraphLink key={link} link={link} />;
  const [a, b] = fullText.split(link);
  if (idx < links.length - 1) {
    const splitB = b ? splitByLink(b, links, idx + 1) : [];
    return [a, realLink].concat(splitB);
  }
  return [a, realLink, b];
}

interface ParagraphLinkProps {
  link: string,
}

function ParagraphLink({ link }: ParagraphLinkProps) {
  const classes = useStyles();
  const match = link.match(/\[(.*)\]\((.+)\)/);
  const label = match ? match[1] : '';
  const url = match ? match[2] : '';
  return <a href={url} target="_bank" className={classes.link} key={label}>{label || url}</a>;
}
