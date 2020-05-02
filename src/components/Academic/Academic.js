import React, { Fragment as section } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectAcademicLang } from '../../redux/selectors';
// Components
import MainContent from '../MainContent/MainContent';
import Course from './Course';

function Academic(props) {
  const classes = useStyles();
  const lang = useSelector(selectAcademicLang);
  console.log('lang', lang);
  const {
    title,
    courses,
  } = lang;
  const [softwareAnalist, webDeveloper] = courses;
  document.title = `Daniel Sosa | ${title}`;

  return (
    <MainContent
      content={(
        <section className={classes.section}>
          <Course course={softwareAnalist} />
          <Course course={webDeveloper} />
        </section>
      )}
    />
  );
}

export default Academic;
