import React, { useMemo } from 'react';
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

interface ILogo {
  src: string,
  alt: string,
}

export interface ISubject {
  name: string,
  score: number,
  techs: string[],
}

interface ICourse {
  title: string,
  institute: string,
  status: string,
  averageScore: string,
  institutionLogo: ILogo,
  subjects: ISubject[],
}
interface Props {
  course: ICourse,
  courseId: string,
}

function Course(props: Props) {
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
  }, [subjects]);

  return (
    <Content component="article" id={courseId}>
      <img src={institutionLogo.src} alt={institutionLogo.alt} className={classes.institutionLogoImage} />
      <Title tabIndex={0}>{title}</Title>
      <ScoreBar score={avgScore} aria-label={`${averageScore} ${avgScore}`} />
      <Subtitle>{institute}</Subtitle>
      <Title2>{lang.subjects}</Title2>
      {subjects.map(subject => <Subject key={subject.name} subject={subject} />)}
    </Content>
  );
}

export default Course;
