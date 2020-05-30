import React, { Fragment, useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
// Material UI
import Typography from '@material-ui/core/Typography';

function MenuItem(props) {
  const { label, to, leftPad } = props;
  const location = useLocation();
  const classes = useStyles();

  const active = useMemo(() => {
    return `${location.pathname}${location.hash}` === to;
  }, [location]);

  return (
    <li role="none" className={classes.withOutSubmenu} style={{ paddingLeft: leftPad }}>
      <Link
        to={to}
        role="menuitem"
        tabIndex="-1"
        className={`${classes.menuItem} ${active ? 'active' : ''}`}
      >
        <Typography component="span">{label}</Typography>
      </Link>
    </li>
  );
}

MenuItem.proptypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  leftPad: PropTypes.number,
};

MenuItem.defaultProps = {
  leftPad: 0,
};

export default MenuItem;
