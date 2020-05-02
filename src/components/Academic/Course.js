import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Components
import ScoreBar from './ScoreBar';
import Subject from './Subject';
// Material UI
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

function Course(props) {
  const classes = useStyles();
  const { course: {
    title,
    status,
    averageScore,
    institutionLogo,
    subjects,
  } } = props;

  const avgScore = useMemo(() => {
    const total = subjects.reduce((total, subject) => total += subject.score, 0);
    return total / subjects.length;
  });

  return (
    <article className={classes.courseRoot}>
      <figure className={classes.institutionLogo} aria-hidden="true">
        <img src={institutionLogo.src} alt={institutionLogo.alt} className={classes.institutionLogoImage} />
      </figure>

      <div className={classes.courseBody}>
        <Typography
          component="h2"
          variant="h3"
          color="textPrimary"
          tabIndex="0"
          className={classes.title}
        >
          {title}
        </Typography>

        <ScoreBar score={avgScore} aria-label={`${averageScore} ${avgScore}`} />

        <List>
          {subjects.map(subject => <Subject key={subject.name} subject={subject} />)}
        </List>
      </div>
    </article>
  );
}

Course.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
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
};

export default Course;

