import { TOGGLE_APP_LANG } from '../actions';
import LANG, { getDefaultLang } from '../../lang';

const initialState = () => {
  try {
    let lang = getDefaultLang();
    const preferred = window.localStorage.getItem('PREFERRED_LANGUAGE');
    if (preferred) {
      lang = preferred;
    }
    return {
      selected: lang,
      ...LANG[lang],
    };
  }
  catch (err) {
    console.error(err);
    return {
      selected: 'ES',
      ...LANG.ES,
    };
  }
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case TOGGLE_APP_LANG:
      try {
        if (state.selected === 'ES') {
          window.localStorage.setItem('PREFERRED_LANGUAGE', 'EN');
          return {
            selected: 'EN',
            ...LANG.EN,
          };
        }
        window.localStorage.setItem('PREFERRED_LANGUAGE', 'ES');
        return {
          selected: 'ES',
          ...LANG.ES,
        };
      }
      catch (err) {
        console.error(err);
        return {
          selected: 'EN',
          ...LANG.EN,
        };
      }
    default:
      return state;
  }
};
