import React from 'react';
import useStyles from './styles';

interface Props {
  id: string,
  children: JSX.Element | JSX.Element[],
  component?: string,
  className?: string,
  style?: any,
}

function Content(props: Props) {
  const { children, component = 'div', className = '', id, style, ...rest } = props;
  const classes = useStyles();

  return React.createElement(
    component,
    {
      id,
      style,
      ...rest,
      className: `${classes.root} ${className}`,
    },
    children,
  );
}

export default Content;
