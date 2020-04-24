import { SET_APP_INFO, ENABLE_STYLES, DISABLE_STYLES } from '../actions';

const initialState = {
  name: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
  version: process.env.APP_VERSION,
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
