import React, { useMemo } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';

interface Props {
  children: string | JSX.Element,
  fullWidth?: boolean,
  className?: string,
  type?: "button" | "reset" | "submit",
  onClick: (event: React.MouseEvent) => void,
}

function Button({ children, fullWidth, className, type = 'button', onClick, ...rest }: Props) {
  const classes = useStyles();
  const style = useMemo(() => {
    if (fullWidth) {
      return { width: '100%' };
    }
    return;
  }, [fullWidth]);

  return (
    <button
      className={`${classes.button} ${className}`}
      style={style}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
