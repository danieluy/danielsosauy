import * as React from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface Props {
  error?: Error,
  timedOut: boolean,
  retry: () => void,
  pastDelay: boolean,
}

function Loading(props: Props) {
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

export default Loading;
