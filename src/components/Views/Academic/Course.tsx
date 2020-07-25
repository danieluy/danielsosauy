import React, { useMemo } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectAcademicLang } from '../../../redux/selectors';
// Components
import Title from '../../Typography/Title';
import Title2 from '../../Typography/Title2';
import Subtitle from '../../Typography/Subtitle';
import ScoreBar from './ScoreBar';
import Subject from './Subject';
import Content from '../Partials/Content/Content';

function Course(props) {
  const {
    course: {
      title,
      institute,
      status,
      averageScore,
      institutionLogo,
      subjects,
    },
    courseId,
  } = props;
  const classes = useStyles();
  const lang = useSelector(selectAcademicLang);

  const avgScore = useMemo(() => {
    const total = subjects.reduce((total, subject) => total += subject.score, 0);
    return total / subjects.length;
  });

  return (
    <Content component="article" id={courseId}>
      <img src={institutionLogo.src} alt={institutionLogo.alt} className={classes.institutionLogoImage} />
      <Title tabIndex="0">{title}</Title>
      <ScoreBar score={avgScore} aria-label={`${averageScore} ${avgScore}`} />
      <Subtitle>{institute}</Subtitle>
      <Title2>{lang.subjects}</Title2>
      {subjects.map(subject => <Subject key={subject.name} subject={subject} />)}
    </Content>
  );
}

Course.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    averageScore: PropTypes.string.isRequired,
    institutionLogo: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    subjects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      techs: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  }),
  courseId: PropTypes.string.isRequired,
};

export default Course;

