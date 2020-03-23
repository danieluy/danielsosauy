import lang from '../../lang';

/**
 * #####       ####
 *   #    ###  #   #  ###
 *   #   #   # #   # #   #
 *   #   #   # #   # #   #
 *   #    ###  ####   ###
 *
 * ToDo: Handle initial state according to browser config
 * ToDo: Handle lang change
 */

const initialState = {
  ...lang.en,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
