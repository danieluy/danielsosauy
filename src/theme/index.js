import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  palette: {
    type: 'dark',
  },
  defaultBackgroundColor: 'rgba(0,0,0,0)',
  activeBackgroundColor: 'rgba(0,0,0,0.25)',
  elevationColor: {
    '0': '#555555',
    '1': '#666666',
  }
});

export default theme;
