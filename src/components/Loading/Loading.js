import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Loading(props) {
  const { error, timedOut, retry, pastDelay } = props;

  return (
    <section>
      {renderSection()}
    </section>
  );

  function renderSection() {
    if (error) {
      return (
        <article>
          <Typography component="h2" variant="h3" color="error">#Error</Typography>
          <Typography component="pre" color="error">{error.message}</Typography>
          <br />
          <Button variant="contained" onClick={retry}>#Retry</Button>
        </article>
      );
    }
    else if (timedOut) {
      return (
        <article>
          <Typography component="h2" variant="h3" color="textPrimary">#Taking a long time...</Typography>
          <br />
          <Button variant="contained" onClick={retry}>#Retry</Button>
        </article>
      )
    }
    else if (pastDelay) {
      return (
        <article>
          <Typography component="h2" variant="h3" color="textPrimary">#Loading...</Typography>
        </article>
      );
    }
    else {
      return null;
    }
  }
}

Loading.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
  pastDelay: PropTypes.bool.isRequired,
};

export default Loading;
