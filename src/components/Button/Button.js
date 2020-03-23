import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

function Button(props) {
  const theme = useTheme();
  const { children, color, active, span, ...rest } = props;

  const rootStyle = React.useMemo(() => {
    const backgroundColor = active
      ? theme.activeBackgroundColor
      : theme.defaultBackgroundColor;

    return {
      height: theme.spacing(6),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      backgroundColor,
    };
  }, [active]);

  return (
    <ButtonBase
      focusRipple
      style={rootStyle}
      component={span ? 'span' : 'button'}
      {...rest}
    >
      {renderChildren()}
    </ButtonBase>
  );

  function renderChildren() {
    if (typeof children === 'string') {
      return <Typography variant="button" component="span">{children}</Typography>;
    }
    return children;
  }
}

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
