import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { Link } from 'react-router-dom';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

function NavLink(props) {
  const { to, children, active, color, span, liClassName, icon: Icon, ...rest } = props;
  const ariaLabel = props['aria-label'];
  const theme = useTheme();

  const rootStyle = React.useMemo(() => {
    const backgroundColor = active
      ? theme.activeBackgroundColor
      : theme.defaultBackgroundColor;

    return {
      height: theme.spacing(6),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      borderRadius: theme.spacing(),
      backgroundColor,
    };
  }, [active]);

  const classes = useStyles();
  return (
    <li className={liClassName}>
      <ButtonBase
        focusRipple
        style={rootStyle}
        component="span"
        tabIndex="-1"
        role="none"
        {...rest}
      >
        {!!Icon && <Icon className={classes.icon}/>}
        <Link to={to} className={classes.a} aria-label={ariaLabel}>
          {renderChildren()}
        </Link>
      </ButtonBase>
    </li>
  );

  function renderChildren() {
    if (typeof children === 'string') {
      return <Typography variant="button" component="span">{children}</Typography>;
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
  liClassName: PropTypes.string,
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
  active: PropTypes.bool,
  icon: PropTypes.object,
};

NavLink.defaultProps = {
  color: 'inherit',
  active: false,
};

export default NavLink;
