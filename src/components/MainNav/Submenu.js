import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';
// Material UI
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';

function Submenu(props) {
  const { children, label, to } = props;
  const theme = useTheme();
  const location = useLocation();
  const classes = useStyles();
  const [active, setActive] = useState(location.pathname === to);
  const [expanded, setExpanded] = useState(active);

  useEffect(() => {
    const active = location.pathname === to;
    setActive(active);
    setExpanded(active);
  }, [location.pathname]);

  const handleExpand = useCallback(evt => {
    evt.preventDefault();
    setExpanded(!expanded);
  });

  const height = useMemo(() => {
    if (children && expanded) {
      return children.length * theme.spacing(6);
    }
    return 0;
  }, [children, expanded]);

  return (
    <li role="none" className={classes.submenu}>
      <a
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={expanded}
        href="#"
        tabIndex="0"
        onClick={handleExpand}
        className={`${classes.menuItem} ${active ? 'active' : ''}`}
      >
        <Typography component="span">{label}</Typography>
      </a>
      <ul
        role="menu"
        aria-label={label}
        className={classes.collapsible}
        style={{ height }}
      >
        {children.map(El => {
          const { leftPad, ...rest } = El.props;
          return (
            <El.type
              key={El.props.to}
              leftPad={leftPad + theme.spacing(2)}
              {...rest}
            />
          );
        })}
      </ul>
    </li>
  );
}

Submenu.proptypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.instanceOf(MenuItem),
      PropTypes.instanceOf(Submenu),
    ]),
  ).isRequired,
  label: PropTypes.string,
};

export default Submenu;
