import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function InputText({ error, errorText, fullWidth, label, id, leftPadding, helperText, required, ...rest }) {
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
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  return (
    <div className={`${classes.inputTextLabel} ${errorMessage ? 'error' : ''}`}>
      <label
        htmlFor={id}
        className={classes.label}
        id={labelId}
        style={labelStyle}
      >
        {label}{required ? <i aria-hidden>*</i> : ''}
      </label>
      <input
        id={id}
        type="text"
        className={classes.inputText}
        style={style}
        aria-labelledby={`${labelId} ${helperText ? descriptionId : ''}`}
        required={required}
        aria-required={required}
        {...rest}
      />
      {!errorMessage && !!helperText && <span tabindex="-1" id={descriptionId} className={classes.helperText}>{helperText}</span>}
      {!!errorMessage && <span id={descriptionId} className={classes.helperText}>{errorMessage}</span>}
    </div>
  );
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  errorText: PropTypes.string,
  error: PropTypes.instanceOf(Error),
  leftPadding: PropTypes.number,
  helperText: PropTypes.string,
  required: PropTypes.bool,
};

InputText.defaultProps = {
  required: false,
};

export default InputText;
