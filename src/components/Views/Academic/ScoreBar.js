import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import useProgress from '../../../react-hooks/useProgress';
// Material UI
import Typography from '@material-ui/core/Typography';

function Score(props) {
  const { score } = props;
  const ariaLabel = props['aria-label'];
  const classes = useStyles();
  const progress = useProgress(0, score, 3);

  return (
    <Fragment>
      <div className={classes.scoreRoot} role="heading" aria-level="3" aria-label={ariaLabel} tabIndex="0">
        <div className={classes.progressBar}>
          <span style={{ width: `${progress}%` }} className={classes.scoreValue}>
            <Typography component="p" variant="h4" color="textPrimary" className={classes.scoreTextValue}>
              {progress.toFixed(1)}
            </Typography>
            <Typography component="p" color="textSecondary" className={classes.scoreTextRest}>
              {100}
            </Typography>
          </span>
        </div>
      </div>
    </Fragment>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;