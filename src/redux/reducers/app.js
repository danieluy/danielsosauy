import { SET_APP_INFO, TOGGLE_APP_THEME, ENABLE_STYLES, DISABLE_STYLES } from '../actions';

const initialState = {
  name: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
  version: process.env.APP_VERSION,
  theme: window.localStorage.getItem('THEME_NAME') || undefined,
  status: {
    styles: true,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case TOGGLE_APP_THEME: {
      const theme = state.theme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('THEME_NAME', theme);
      return {
        ...state,
        theme,
      };
    }
    case ENABLE_STYLES: {
      return {
        ...state,
        status: {
          ...state.status,
          styles: true,
        },
      };
    }
    case DISABLE_STYLES: {
      return {
        ...state,
        status: {
          ...state.status,
          styles: false,
        },
      };
    }
    default:
      return state;
  }
};
