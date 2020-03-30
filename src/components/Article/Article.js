import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';

function Article(props) {
  const { articleId, title, banner, paragraphs } = props;
  const classes = useStyles();

  return (
    <article className={classes.root} aria-label={title} id={articleId}>
      <img
        aria-hidden="true"
        src={banner}
        alt={`${title} #ilustration`}
        className={classes.banner}
      />
      <Typography component="h2" variant="h3" color="textPrimary" className={classes.title}>{title}</Typography>
      {paragraphs.map((paragraph, i) => (
        <Typography
          key={i}
          component="p"
          className={classes.paragraph}
          aria-label="#article body"
          color="textPrimary"
        >{paragraph}</Typography>
      ))}
    </article>
  );
}

Article.proptypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
