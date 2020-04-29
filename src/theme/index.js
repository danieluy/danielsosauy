import { createMuiTheme } from '@material-ui/core/styles';

const light = {
  palette: {
    type: 'light',
    primary: {
      contrastText: '#FFF',
      dark: '#0900A5',
      light: '#3E33F0',
      main: '#0E00ED',
    },
  },
  defaultBackgroundColor: 'rgba(255,255,255,0)',
  activeBackgroundColor: 'rgba(0,0,0,0.0625)',
  browserNavBar: '#FFF',
  elevationColor: {
    '5': '#AAA',
    '4': '#BBB',
    '3': '#CCC',
    '2': '#DDD',
    '1': '#EEE',
    '0': '#FFF', // Top is reserved for Chrome's nav bar
  },
};

const dark = {
  palette: {
    type: 'dark',
    primary: {
      contrastText: '#FFF',
      dark: '#7975AF',
      light: '#BDB9FB',
      main: '#ADA8FB',
    },
  },
  defaultBackgroundColor: 'rgba(0,0,0,0)',
  activeBackgroundColor: 'rgba(255,255,255,0.0625)',
  browserNavBar: '#000',
  elevationColor: {
    '0': '#333333',
    '1': '#444444',
    '2': '#555555',
    '3': '#666666',
    '4': '#777777',
    '5': '#888888', // Top is reserved for Chrome's nav bar
  },
};

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  ...dark,
});

export default theme;
