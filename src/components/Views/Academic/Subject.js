import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectAcademicLang } from '../../../redux/selectors';
// Components
import Title3 from '../../Typography/Title3';
import Paragraph from '../../Typography/Paragraph';
// Material UI
import Typography from '@material-ui/core/Typography';

function Subject({ subject }) {
  const classes = useStyles();
  const lang = useSelector(selectAcademicLang);

  return (
    <Fragment key={subject.name}>
      <Title3>{subject.name}</Title3>
      <Paragraph>{`${lang.score}: ${subject.score}`}</Paragraph>
      <Paragraph color="textSecondary">{`${lang.keywords}: ${subject.techs.join(', ')}`}</Paragraph>
    </Fragment>
  );
}

Subject.propTypes = {
  score: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default Subject;
