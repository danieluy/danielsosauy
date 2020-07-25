import React, { useMemo } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';

interface Props {
  children: string,
  fullWidth: boolean,
  className?: string,
}

function Button({ children, fullWidth, className, ...rest }: Props) {
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
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
