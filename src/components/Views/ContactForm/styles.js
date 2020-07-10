import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles(theme => {
  return {
    section: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    banner: {
      width: '100%',
      marginBottom: theme.spacing(4),
    },
  };
});
