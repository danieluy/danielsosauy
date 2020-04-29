export const SET_APP_INFO = 'SET_APP_INFO';
export const setAppInfo = info => ({
  type: SET_APP_INFO,
  payload: info,
});

export const ENABLE_STYLES = 'ENABLE_STYLES';
export const enableStyles = () => ({ type: ENABLE_STYLES });

export const DISABLE_STYLES = 'DISABLE_STYLES';
export const disableStyles = () => ({ type: DISABLE_STYLES });

export const TOGGLE_APP_THEME = 'TOGGLE_APP_THEME';
export const toggleAppTheme = theme => ({ type: TOGGLE_APP_THEME });