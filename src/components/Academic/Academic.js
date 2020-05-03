import React, { Fragment as section } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectAcademicLang } from '../../redux/selectors';
// Components
import MainContent, { Subtitle } from '../MainContent/MainContent';
import Course from './Course';
import HashLink from '../HashLink/HashLink';

function Academic(props) {
  const classes = useStyles();
  const lang = useSelector(selectAcademicLang);
  console.log('lang', lang);
  const {
    title,
    courses,
    coursesTitle,
  } = lang;
  const [softwareAnalist, webDeveloper] = courses;
  document.title = `Daniel Sosa | ${title}`;

  return (
    <MainContent
      content={(
        <section className={classes.section}>
          <Course articleId="software-analist" course={softwareAnalist} />
          <Course articleId="web-developer" course={webDeveloper} />
        </section>
      )}
      aside={[
        <Subtitle>{coursesTitle}</Subtitle>,
        <HashLink articleId="software-analist" title={softwareAnalist.title} />,
        <HashLink articleId="web-developer" title={webDeveloper.title} />,
      ]}
    />
  );
}

export default Academic;
