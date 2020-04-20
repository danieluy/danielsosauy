import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const Button = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const { children, color, active, span, ...rest } = props;

  const rootStyle = React.useMemo(getRootStyle, [active]);

  return (
    <ButtonBase
      focusRipple
      style={rootStyle}
      component={span ? 'span' : 'button'}
      color={color}
      {...rest}
      ref={ref}
    >
      {renderChildren()}
    </ButtonBase>
  );

  function renderChildren() {
    if (typeof children === 'string') {
      return <Typography variant="button" component="span" color={color}>{children}</Typography>;
    }
    return children;
  }

  /**
   * Inline styles are neccessary here.
   * ButtonBase will override styles applyed by className.
   */
  function getRootStyle() {
    const backgroundColor = active
      ? theme.activeBackgroundColor
      : theme.defaultBackgroundColor;

    return {
      height: theme.spacing(6),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      backgroundColor,
    };
  }
});

Button.proptypes = {
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
  active: PropTypes.bool,
  span: PropTypes.bool,
};

Button.defaultProps = {
  color: 'inherit',
  active: false,
  span: false,
};

export default Button;
