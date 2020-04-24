import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/selectors';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

function NavLink(props) {
  const { to, children, color, span, icon: Icon, vertical, ...rest } = props;
  const ariaLabel = props['aria-label'];
  const classes = useStyles();
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const status = useSelector(selectStatus);

  const active = React.useMemo(() => (to === location.pathname), [to, location]);

  const rootStyle = React.useMemo(() => {
    const backgroundColor = active
      ? theme.activeBackgroundColor
      : theme.defaultBackgroundColor;

    return {
      height: theme.spacing(8),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      backgroundColor,
      flexDirection: vertical ? 'column' : 'row',
      alignItems: 'center',
      width: downSm ? '100%' : 'auto',
    };
  }, [active, downSm]);

  if (status.styles) {
    return (
      <ButtonBase
        focusRipple
        style={rootStyle}
        component="span"
        tabIndex="-1"
        role="none"
        {...rest}
      >
        <Link to={to} className={classes.a} aria-label={ariaLabel}>
          {!!Icon && <Icon className={classes.icon} />}
          <Children />
        </Link>
      </ButtonBase>
    );
  }
  return (
    <a href={to} aria-label={ariaLabel}><Children /></a>
  );


  function Children() {
    if (typeof children === 'string') {
      return <Typography variant="button" component="span" className={classes.linkText}>{children}</Typography>;
    }
    return children;
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
  icon: PropTypes.object,
  vertical: PropTypes.bool,
};

NavLink.defaultProps = {
  color: 'inherit',
  vertical: false,
};

export default NavLink;
