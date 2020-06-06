import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Components
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import Content from '../Views/Partials/Content/Content';

function Article(props) {
  const { articleId, title, banner, paragraphs } = props;
  const classes = useStyles();

  return (
    <Content component="article" aria-label={title} id={articleId}>
      <img src={banner.src} alt={banner.alt} className={classes.banner} />
      <Title tabIndex="0">{title}</Title>
      {paragraphs.map((paragraph, i) => renderParagraph(paragraph, i))}
    </Content>
  );

  function renderParagraph(paragraph, key) {
    const markdownLinks = paragraph.match(/\[([^\]]*)\]\(([^)]+)\)/g);
    const textWithLinks = splitByLink(paragraph, markdownLinks, 0);
    return (
      <Paragraph key={key} aria-label="#article body">
        {textWithLinks}
      </Paragraph>
    );
  }

  function splitByLink(fullText, links, idx) {
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

  function parseLink(link) {
    const [_, label, url] = link.match(/\[(.*)\]\((.+)\)/);
    return <a href={url} target="_bank" className={classes.link} key={label}>{label || url}</a>;
  }
}

Article.proptypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
