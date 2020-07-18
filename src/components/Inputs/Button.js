import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Button({ children, fullWidth, className, ...rest }) {
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

Button.propTypes = {
  children: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;
