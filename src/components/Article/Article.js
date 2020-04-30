import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/selectors';
// Material UI
import Typography from '@material-ui/core/Typography';

function Article(props) {
  const { articleId, title, banner, paragraphs } = props;
  const classes = useStyles();
  const status = useSelector(selectStatus);

  return (
    <article className={classes.root} aria-label={title} id={articleId}>

      {status.styles && (
        <figure className={classes.banner} aria-hidden="true">
          <img src={banner.src} alt={banner.alt} className={classes.bannerImage} />
        </figure>
      )}

      <div className={classes.body}>
        <Typography
          component="h2"
          variant="h3"
          color="textPrimary"
          tabIndex="0"
          className={classes.title}
        >
          {title}
        </Typography>
        {paragraphs.map((paragraph, i) => renderParagraph(paragraph, i))}
      </div>
    </article>
  );

  function renderParagraph(paragraph, key) {
    const markdownLinks = paragraph.match(/\[([^\]]*)\]\(([^)]+)\)/g);
    const textWithLinks = splitByLink(paragraph, markdownLinks, 0);
    return (
      <Typography
        key={key}
        component="p"
        className={classes.paragraph}
        aria-label="#article body"
        color="textPrimary"
      >
        {textWithLinks}
      </Typography>
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
