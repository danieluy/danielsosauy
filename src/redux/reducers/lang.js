import { TOGGLE_APP_LANG } from '../actions';
import LANG, { getDefaultLang } from '../../lang';

const initialState = () => {
  const lang = getDefaultLang();
  return {
    selected: lang,
    ...LANG[lang],
  };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case TOGGLE_APP_LANG: {
      if (state.selected === 'ES') {
        return {
          selected: 'EN',
          ...LANG.EN,
        };
      }
      return {
        selected: 'ES',
        ...LANG.ES,
      };
    }
    default:
      return state;
  }
};
