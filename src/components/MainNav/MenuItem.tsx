import React, { Fragment, useCallback, useState, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
// Material UI
import Typography from '@material-ui/core/Typography';

const MenuItem = React.forwardRef((props, ref) => {
  const { label, to, leftPad, onClick, onKeyDown, icon: Icon, ...rest } = props;
  const location = useLocation();
  const classes = useStyles();

  const active = useMemo(() => {
    return `${location.pathname}${location.hash}` === to;
  }, [location]);

  return (
    <li role="none">
      <Link
        to={to}
        role="menuitem"
        tabIndex="-1"
        className={`${classes.menuItem} ${active ? 'active' : ''}`}
        ref={ref}
        onClick={onClick}
        onKeyDown={onKeyDown}
        style={{ paddingLeft: leftPad }}
        {...rest}
      >
        {!!Icon && (
          <span className={classes.submenuIcon} aria-hidden>
            <Icon />
          </span>
        )}
        <Typography component="span">{label}</Typography>
      </Link>
    </li>
  );
});

MenuItem.proptypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  leftPad: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  icon: PropTypes.element,
};

MenuItem.defaultProps = {
  leftPad: 0,
};

export default MenuItem;
