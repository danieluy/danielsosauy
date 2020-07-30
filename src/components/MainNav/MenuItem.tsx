import React, { useMemo } from 'react';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
// Material UI
import Typography from '@material-ui/core/Typography';

interface Props {
  label: string,
  to: string,
  leftPad?: number,
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void,
  icon?: JSX.Element,
}

declare type RefCallback = (instance: HTMLAnchorElement | null) => void;

const MenuItem = React.forwardRef((props: Props, ref: RefCallback) => {
  const { label, to, leftPad = 0, onClick, onKeyDown, icon: Icon, ...rest } = props;
  const location = useLocation();
  const classes = useStyles();

  const active = useMemo<boolean>(() => {
    return `${location.pathname}${location.hash}` === to;
  }, [location]);

  return (
    <li role="none">
      <Link
        to={to}
        role="menuitem"
        tabIndex={-1}
        className={`${classes.menuItem} ${active ? 'active' : ''}`}
        ref={ref}
        onClick={onClick}
        onKeyDown={onKeyDown}
        style={{ paddingLeft: leftPad }}
        {...rest}
      >
        {renderIcon()}
        <Typography component="span">{label}</Typography>
      </Link>
    </li>
  );

  function renderIcon() {
    if (Icon) {
      return (
        <span className={classes.submenuIcon} aria-hidden>
          <Icon.type />
        </span>
      );
    }
    return null;
  }
});

export default MenuItem;
