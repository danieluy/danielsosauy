import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  palette: {
    type: 'dark',
  },
  defaultBackgroundColor: 'rgba(0,0,0,0)',
  activeBackgroundColor: 'rgba(255,255,255,0.0625)',
  elevationColor: {
    '0': '#333333',
    '1': '#444444',
    '2': '#555555',
    '3': '#666666',
    '4': '#777777',
    '5': '#888888', // Top is reserved for Chrome's nav bar
  },
});

export default theme;
