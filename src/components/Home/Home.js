import React from 'react';
import { useSelector } from 'react-redux';
import { selectHomeLang } from '../../redux/selectors';
import useStyles from './styles';
// Components
import MainContent, { Subtitle } from '../MainContent/MainContent';
import Article from '../Article/Article';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';


function Home() {
  const theme = useTheme();
  const classes = useStyles();
  const lang = useSelector(selectHomeLang);
  const {
    title,
    articles: { whatWhy, accessibility, design, performance, tech },
  } = lang;

  document.title = `Daniel Sosa | ${title}`;

  return (
    <MainContent
      content={(
        <section className={classes.section}>
          <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
          <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
          <Article articleId="design" title={design.title} banner={design.banner} paragraphs={design.paragraphs} />
          <Article articleId="performance" title={performance.title} banner={performance.banner} paragraphs={performance.paragraphs} />
          <Article articleId="tech" title={tech.title} banner={tech.banner} paragraphs={tech.paragraphs} />
        </section>
      )}
      aside={[
        <Subtitle>{lang.articlesNavigation}</Subtitle>,
        <HashLink articleId="what-why" title={whatWhy.title} />,
        <HashLink articleId="accessibility" title={accessibility.title} />,
        <HashLink articleId="design" title={design.title} />,
        <HashLink articleId="performance" title={performance.title} />,
        <HashLink articleId="tech" title={tech.title} />,
        <Subtitle>{lang.misc}</Subtitle>,
        <ToggleThemeButton color="textPrimary" />,
      ]}
    />
  );

  function HashLink({ articleId, title, ...rest }) {
    return (
      <ButtonBase
        focusRipple
        size="small"
        component={'a'}
        color="inherit"
        href={`#${articleId}`}
        style={{
          height: theme.spacing(6),
          paddingRight: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          backgroundColor: theme.defaultBackgroundColor,
          textDecoration: 'none',
          ...theme.typography.button,
        }}
        {...rest}
      >
        {title}
      </ButtonBase>
    );
  }
}

export default Home;
