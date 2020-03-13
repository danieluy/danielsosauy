import makeStyles from '@material-ui/core/styles/makeStyles';
import card from '../../theme/card';

export default makeStyles(theme => {
  return {
    root: {
      ...card,
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
      flexShrink: 0,
    },
    banner: {
      width: '100%',
    },
    title: {
      padding: theme.spacing(4),
    },
    paragraph: {
      columnCount: 4,
      padding: theme.spacing(4),
      paddingTop: 0,
    },
  };
});
