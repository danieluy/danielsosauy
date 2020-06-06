import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

function Content(props) {
  const { children, component, ...rest } = props;
  const classes = useStyles();

  return React.createElement(
    component,
    { ...rest, className: classes.root },
    children,
  );
}

Content.proptypes = {
  children: PropTypes.element.isRequired,
  component: PropTypes.string,
};

Content.defaultProps = {
  component: 'div',
};

export default Content;
