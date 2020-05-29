import React, { Fragment, useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
// Material UI
import Typography from '@material-ui/core/Typography';

function MenuItem(props) {
  const { label, to } = props;
  const location = useLocation();
  const classes = useStyles();

  return (
    <li role="none" className={classes.withOutSubmenu}>
      <Link
        to={to}
        role="menuitem"
        tabIndex="-1"
        className={classes.menuItem}
      >
        <Typography component="span">{label}</Typography>
      </Link>
    </li>
  );
}

MenuItem.proptypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
