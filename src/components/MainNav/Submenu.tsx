import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
import { useLocation, Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import useProgress from '../../react-hooks/useProgress';
import { KEY_CODE } from '../../utils/contants';
// Material UI
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLessOutlined';
import useTheme from '@material-ui/core/styles/useTheme';

const Submenu = React.forwardRef((props, ref) => {
  const {
    children,
    label,
    activePath,
    focusOnMenuNext,
    focusOnMenuPrev,
    icon: Icon,
    headerOpen,
    to,
  } = props;
  const theme = useTheme();
  const location = useLocation();
  const classes = useStyles();
  const [active, setActive] = useState(location.pathname === activePath);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useProgress(0, 20);

  // Ref to hold multiple refs
  const menuItemsRef = useRef(children ? children.map(() => React.createRef()) : null);

  const expandedHeight = useMemo(() => {
    return children ? children.length * theme.spacing(6) : 0;
  }, []);

  useEffect(() => {
    const active = location.pathname === activePath;
    setActive(active);
  }, [location.pathname]);

  useEffect(() => {
    if (!headerOpen) {
      setHeight(0, 0);
    }
    else {
      if (expanded && height === 0) {
        setHeight(0, expandedHeight);
      }
      if (!expanded && height > 0) {
        setHeight(expandedHeight, 0);
      }
    }
  }, [expanded, headerOpen]);

  const handleExpand = useCallback(evt => {
    evt.preventDefault();
    const _expanded = !expanded;
    setExpanded(_expanded);
    if (_expanded) {
      const first = menuItemsRef.current[0].current;
      first.focus();
    }
  });

  const handleMenuItemClick = useCallback(() => {
    setExpanded(false);
    document.activeElement.blur();
  });

  const handleArrowDown = useCallback(idx => {
    const menuItems = menuItemsRef.current;
    const lastIdx = menuItems.length - 1;
    let nextIdx = idx + 1;
    if (nextIdx > lastIdx) {
      nextIdx = 0;
    }
    menuItems[nextIdx].current.focus();
  });

  const handleArrowUp = useCallback(idx => {
    const menuItems = menuItemsRef.current;
    const lastIdx = menuItems.length - 1;
    let nextIdx = idx - 1;
    if (nextIdx < 0) {
      nextIdx = lastIdx;
    }
    menuItems[nextIdx].current.focus();
  });

  const handleMenuItemKeyDown = useCallback(idx => evt => {
    switch (evt.keyCode) {
      case KEY_CODE.ARROW_DOWN: {
        handleArrowDown(idx);
        break;
      }
      case KEY_CODE.ARROW_UP: {
        handleArrowUp(idx);
        break;
      }
      case KEY_CODE.ARROW_RIGHT: {
        setExpanded(false);
        focusOnMenuNext();
        break;
      }
      case KEY_CODE.ARROW_LEFT: {
        setExpanded(false);
        focusOnMenuPrev();
        break;
      }
      default: {
        break;
      }
    }
  });

  const handleMenuKeyDown = useCallback(evt => {
    switch (evt.keyCode) {
      case KEY_CODE.ARROW_DOWN: {
        setExpanded(true);
        const first = menuItemsRef.current[0].current;
        first.focus();
        break;
      }
      case KEY_CODE.ARROW_UP: {
        setExpanded(true);
        const last = menuItemsRef.current[menuItemsRef.current.length - 1].current;
        last.focus();
        break;
      }
      case KEY_CODE.ARROW_RIGHT: {
        setExpanded(false);
        focusOnMenuNext();
        break;
      }
      case KEY_CODE.ARROW_LEFT: {
        setExpanded(false);
        focusOnMenuPrev();
        break;
      }
      default: {
        break;
      }
    }
  }, []);

  if (children) {
    return (
      <li role="none" className={classes.submenu}>
        <ExpandIcon />
        <a
          ref={ref}
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={expanded}
          href="#"
          tabIndex="0"
          onClick={handleExpand}
          onKeyDown={handleMenuKeyDown}
          className={`${classes.submenuLink} ${active ? 'active' : ''}`}
        >
          <span className={classes.submenuIcon} aria-hidden>
            <Icon />
          </span>
          <Typography component="span">{label}</Typography>
        </a>
        <ul
          role="menu"
          aria-label={label}
          className={classes.collapsible}
          style={{ height }}
        >
          {children.map((El, i) => {
            const { leftPad, ...rest } = El.props;
            return (
              <El.type
                ref={menuItemsRef.current[i]}
                key={El.props.to}
                leftPad={(leftPad || 0) + theme.spacing(6)}
                onClick={handleMenuItemClick}
                onKeyDown={handleMenuItemKeyDown(i)}
                {...rest}
              />
            );
          })}
        </ul>
      </li>
    );
  }
  return (
    <li role="none" className={classes.submenu}>
      <Link
        ref={ref}
        role="menuitem"
        to={to}
        tabIndex="0"
        onKeyDown={handleMenuKeyDown}
        className={`${classes.submenuLink} ${active ? 'active' : ''}`}
      >
        <span className={classes.submenuIcon} aria-hidden>
          <Icon />
        </span>
        <Typography component="span">{label}</Typography>
      </Link>
    </li>
  );

  function ExpandIcon() {
    const className = `${classes.expandIcon} ${active ? 'active' : ''} ${!headerOpen ? 'hidden' : ''}`;
    if (expanded) {
      return (
        <span className={className} aria-hidden>
          <ExpandLessIcon />
        </span>
      );
    }
    return (
      <span className={className} aria-hidden>
        <ExpandMoreIcon />
      </span>
    );
  }
});

Submenu.proptypes = {
  children: PropTypes.arrayOf(PropTypes.instanceOf(MenuItem)).isRequired,
  label: PropTypes.string,
  activePath: PropTypes.string,
  focusOnMenuNext: PropTypes.func.isRequired,
  focusOnMenuPrev: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  headerOpen: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

export default Submenu;