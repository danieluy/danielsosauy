import React, { useMemo } from 'react';
import useStyles from './styles';
import { InputProps } from './InputText';

interface Props extends InputProps {
  rows?: number,
  onChange: ((event: React.ChangeEvent<HTMLElement>) => void),
}

function InputTextArea(props: Props) {
  const { error, errorText, fullWidth, label, id, leftPadding, helperText, required = false, rows, onChange, ...rest } = props;
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
      <textarea
        id={id}
        className={classes.inputText}
        style={style}
        aria-labelledby={`${labelId} ${helperText ? descriptionId : ''}`}
        required={required}
        aria-required={required}
        rows={rows}
        onChange={onChange}
        {...rest}
      />
      {!errorMessage && !!helperText && <span tabIndex={-1} id={descriptionId} className={classes.helperText}>{helperText}</span>}
      {!!errorMessage && <span id={descriptionId} className={classes.helperText}>{errorMessage}</span>}
    </div>
  );
}

export default InputTextArea;
