import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectAcademicLang } from '../../../redux/selectors';
// Material UI
import Typography from '@material-ui/core/Typography';

function Subject({ subject }) {
  const classes = useStyles();
  const lang = useSelector(selectAcademicLang);

  return (
    <Fragment key={subject.name}>
      <Typography
        component="h4"
        color="textPrimary"
        variant="h5"
        className={classes.subjectTitle}
      >
        {subject.name}
      </Typography>
      <Typography color="textPrimary">{`${lang.score}: ${subject.score}`}</Typography>
      <Typography color="textSecondary">{`${lang.keywords}: ${subject.techs.join(', ')}`}</Typography>
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
