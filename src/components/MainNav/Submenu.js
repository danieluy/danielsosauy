import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';
import useProgress from '../../react-hooks/useProgress';
// Material UI
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLessOutlined';
import useTheme from '@material-ui/core/styles/useTheme';

function Submenu(props) {
  const { children, label, to } = props;
  const theme = useTheme();
  const location = useLocation();
  const classes = useStyles();
  const [active, setActive] = useState(location.pathname === to);
  const [expanded, setExpanded] = useState(active);
  const [height, setHeight] = useProgress(0, 20);

  const expandedHeight = useMemo(() => {
    return children.length * theme.spacing(6);
  }, []);

  useEffect(() => {
    const active = location.pathname === to;
    setActive(active);
    setExpanded(active);
  }, [location.pathname]);

  useEffect(() => {
    if (expanded) {
      setHeight(0, expandedHeight);
    }
    else {
      setHeight(expandedHeight, 0);
    }
  }, [expanded]);

  const handleExpand = useCallback(evt => {
    evt.preventDefault();
    setExpanded(!expanded);
  });

  return (
    <li role="none" className={classes.submenu}>
      <ExpandIcon />
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

  function ExpandIcon() {
    if (expanded) {
      return (
        <span className={`${classes.expandIcon} ${active ? 'active' : ''}`} aria-hidden>
          <ExpandLessIcon />
        </span>
      );
    }
    return (
      <span className={`${classes.expandIcon} ${active ? 'active' : ''}`} aria-hidden>
        <ExpandMoreIcon />
      </span>
    );
  }
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
