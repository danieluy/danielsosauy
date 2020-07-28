import React, { useMemo } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';

interface Props {
  children: string | JSX.Element,
  fullWidth?: boolean,
  className?: string,
  onClick: (event: React.MouseEvent) => void,
}

function Button({ children, fullWidth, className, onClick, ...rest }: Props) {
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
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
