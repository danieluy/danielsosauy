import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectToggleThemeButtonLang, selectTheme, selectStatus } from '../../redux/selectors';
import { toggleAppTheme } from '../../redux/actions';
// Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';

function ToggleThemeButton(props) {
  const { color, ...rest } = props;
  const dispatch = useDispatch();
  const theme = useTheme();
  const lang = useSelector(selectToggleThemeButtonLang);
  const status = useSelector(selectStatus);
  const selectedThemeMode = useSelector(selectTheme);
  const prefersLightMode = useMediaQuery('@media (prefers-color-scheme: light)');
  const preferedMode = prefersLightMode ? 'light' : 'dark';
  const themeMode = selectedThemeMode || preferedMode;
  const themeName = themeMode === 'dark' ? lang.light : lang.dark;

  const shwitchTheme = React.useCallback(() => {
    dispatch(toggleAppTheme());
  });

  if (status.styles) {
    return (
      <ButtonBase
        focusRipple
        onClick={shwitchTheme}
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
        {themeName}
      </ButtonBase>
    );
  }

  return (
    <button disabled>{themeName}</button>
  );
}

ToggleThemeButton.propTypes = {
  color: PropTypes.string,
};

ToggleThemeButton.defaultProps = {
  color: 'inherit',
};

export default ToggleThemeButton;
