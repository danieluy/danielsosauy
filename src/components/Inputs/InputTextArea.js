import React, { useMemo, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function InputTextArea({ error, errorText, fullWidth, label, id, leftPadding, ...rest }) {
  const classes = useStyles();
  const ref = useRef();

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

  if (ref.current) {
    console.log('ref.current.childNode', ref.current.childNode);
    const textNode = ref.current.firstChild;
    if (textNode) {
      const range = document.createRange();
      range.selectNodeContents(textNode);
      const rects = range.getClientRects();
      console.log(rects);
    }
  }

  const labelStyle = useMemo(() => (leftPadding ? { minWidth: leftPadding } : {}), [leftPadding]);

  return (
    <label htmlFor={id} aria-label={label} className={`${classes.inputTextLabel} ${errorMessage ? 'error' : ''}`}>
      <span aria-hidden className={classes.label} style={labelStyle}>{label}</span>
      <textarea
        ref={ref}
        id={id}
        className={classes.inputText}
        style={style}
        {...rest}
      />
      {!!errorMessage && <span className={classes.errorMessage}>{errorMessage}</span>}
    </label>
  );
}

InputTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  errorText: PropTypes.string,
  error: PropTypes.instanceOf(Error),
  leftPadding: PropTypes.number,
};

export default InputTextArea;
