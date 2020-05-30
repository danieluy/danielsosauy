import React, { useEffect } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectAcademicLang } from '../../../redux/selectors';
// Components
import Course from './Course';

function Academic(props) {
  const classes = useStyles();
  const lang = useSelector(selectAcademicLang);
  const {
    title,
    courses,
    coursesTitle,
  } = lang;
  const [softwareAnalist, webDeveloper] = courses;

  useEffect(() => {
    document.title = `Daniel Sosa | ${title}`;
  }, []);

  return (
    <section className={classes.section}>
      <Course courseId="software-analist" course={softwareAnalist} />
      <Course courseId="web-developer" course={webDeveloper} />
    </section>
  );
}

export default Academic;
