import { createMuiTheme } from '@material-ui/core/styles';
import button from './button';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  button,
});

export default theme;
