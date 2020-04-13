import { SET_APP_INFO } from '../actions';

const initialState = {
  name: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
  version: process.env.APP_VERSION,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
