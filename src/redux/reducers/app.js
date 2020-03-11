import { SET_APP_INFO } from '../actions';
import pck from '../../../package.json';

const initialState = {
  name: pck.name,
  description: pck.description,
  version: pck.version,
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
