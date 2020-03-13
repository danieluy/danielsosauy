const initialState = {
  home: {
    articles: {
      whatWhy: {
        title: 'What and Why?',
        paragraphs: [
          'The purpose of this site is to present what I like to do, and it was created out of the necessity of showing of my work and my aptitudes since they fall out of what my academic formation demonstrates. It\'s a compendium of activities and projects solely related to software development. You can check other stuff on the sections Arq and Img of this site. The source code of this site is open source and its freely available on Github under the MIT license. You can get it through my GitHub profile (on top), or you can go directly clicking here.',
        ],
        banner: 'assets/img/article-banners/what-why.png',
      },
      accessibility: {
        title: 'Accessibility',
        paragraphs: [
          'The purpose of this site is to present what I like to do, and it was created out of the necessity of showing of my work and my aptitudes since they fall out of what my academic formation demonstrates. It\'s a compendium of activities and projects solely related to software development. You can check other stuff on the sections Arq and Img of this site. The source code of this site is open source and its freely available on Github under the MIT license. You can get it through my GitHub profile (on top), or you can go directly clicking here.',
        ],
        banner: 'assets/img/article-banners/accessibility.png',
      },
    },
  },
  styleToggle: {
    label: 'Toogle Styles',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
