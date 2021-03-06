import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectAcademicLang } from '../../../redux/selectors';
import { ISubject } from './Course';
// Components
import Title3 from '../../Typography/Title3';
import Paragraph from '../../Typography/Paragraph';

interface Props {
  subject: ISubject,
}

function Subject({ subject }: Props) {
  const lang = useSelector(selectAcademicLang);

  return (
    <Fragment key={subject.name}>
      <Title3>{subject.name}</Title3>
      <Paragraph>{`${lang.score}: ${subject.score}`}</Paragraph>
      <Paragraph color="textSecondary">{`${lang.keywords}: ${subject.techs.join(', ')}`}</Paragraph>
    </Fragment>
  );
}

export default Subject;
