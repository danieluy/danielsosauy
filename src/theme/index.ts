import { createMuiTheme, Theme } from '@material-ui/core/styles';

export default (): Theme => {
  return createMuiTheme({
    typography: {
      fontFamily: '"Roboto Condensed", sans-serif',
    },
    palette: {
      type: 'light',
      primary: {
        dark: '#0900A5',
        light: '#3E33F0',
        main: '#0E00ED',
      },
    },
  });
};
