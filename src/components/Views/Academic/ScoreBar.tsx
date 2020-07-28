import React, { Fragment, useEffect } from 'react';
import useStyles from './styles';
import useProgress from '../../../react-hooks/useProgress';
// Material UI
import Typography from '@material-ui/core/Typography';

interface Props {
  score: number,
  'aria-label'?: string,
}

function Score(props: Props) {
  const { score } = props;
  const ariaLabel = props['aria-label'];
  const classes = useStyles();
  const [progress, setProgress] = useProgress(0);

  useEffect(() => {
    setProgress(0, score);
  }, []);

  return (
    <Fragment>
      <div className={classes.scoreRoot} role="heading" aria-level={3} aria-label={ariaLabel} tabIndex={0}>
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

export default Score;
