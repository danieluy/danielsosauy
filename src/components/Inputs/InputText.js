import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function InputText({ error, errorText, fullWidth, label, id, leftPadding, ...rest }) {
  const classes = useStyles();
  const style = useMemo(() => {
    if (fullWidth) {
      return { width: '100%' };
    }
    return;
  }, [fullWidth]);

  const errorMessage = useMemo(() => {
    if (!error) return;
    return errorText || error.message;
  }, [error, errorText]);

  const labelStyle = useMemo(() => (leftPadding ? { minWidth: leftPadding } : {}), [leftPadding]);

  return (
    <label htmlFor={id} aria-label={label} className={`${classes.inputTextLabel} ${errorMessage ? 'error' : ''}`}>
      <span aria-hidden className={classes.label} style={labelStyle}>{label}</span>
      <input
        id={id}
        type="text"
        className={classes.inputText}
        style={style}
        {...rest}
      />
      {!!errorMessage && <span className={classes.errorMessage}>{errorMessage}</span>}
    </label>
  );
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  errorText: PropTypes.string,
  error: PropTypes.instanceOf(Error),
  leftPadding: PropTypes.number,
};

export default InputText;
