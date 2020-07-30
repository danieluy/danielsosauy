import React, { useMemo } from 'react';
import useStyles from './styles';

export interface InputProps {
  id: string,
  label: string,
  fullWidth: boolean,
  errorText?: string,
  error: Error | null,
  leftPadding: number,
  helperText?: string,
  required: boolean,
  value: string,
  name: string,
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void),
  autoComplete?: string,
  autoFocus?: boolean,
}

function InputText(props: InputProps) {
  const {
    error,
    errorText,
    fullWidth,
    label,
    id,
    leftPadding,
    helperText,
    required = false,
    value,
    name,
    onChange,
    autoComplete,
    autoFocus,
    ...rest
  } = props;
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
        value={value}
        name={name}
        onChange={onChange}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        {...rest}
      />
      {!errorMessage && !!helperText && <span tabIndex={-1} id={descriptionId} className={classes.helperText}>{helperText}</span>}
      {!!errorMessage && <span id={descriptionId} className={classes.helperText}>{errorMessage}</span>}
    </div>
  );
}

export default InputText;
