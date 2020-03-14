import lang from '../../lang';

const initialState = {
  home: lang.en.home,
  styleToggle: lang.en.styleToggle,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
