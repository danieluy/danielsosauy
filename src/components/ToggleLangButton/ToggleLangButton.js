import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectToggleLangButtonLang } from '../../redux/selectors';
import { toggleAppLang } from '../../redux/actions';
// Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';

function ToggleLangButton(props) {
  const { color, ...rest } = props;
  const dispatch = useDispatch();
  const theme = useTheme();
  const lang = useSelector(selectToggleLangButtonLang);
  const prefersLightMode = useMediaQuery('@media (prefers-color-scheme: light)');

  const shwitchLang = React.useCallback(() => {
    dispatch(toggleAppLang());
  });

  return (
    <ButtonBase
      focusRipple
      onClick={shwitchLang}
      color={color}
      style={{
        height: theme.spacing(6),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        backgroundColor: theme.defaultBackgroundColor,
        ...theme.typography.button,
      }}
      {...rest}
    >
      {lang.switchTo}
    </ButtonBase>
  );
}

ToggleLangButton.propTypes = {
  color: PropTypes.string,
};

ToggleLangButton.defaultProps = {
  color: 'inherit',
};

export default ToggleLangButton;
