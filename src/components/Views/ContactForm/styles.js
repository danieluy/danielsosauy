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
    form: {
      marginTop: theme.spacing(2),
    },
    messagePopup: {
      display: 'flex',
      alignItems: 'flex-start',
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(8),
      maxWidth: theme.spacing(75),
      backgroundColor: theme.palette.common.white,
      borderWidth: theme.spacing(.5),
      borderStyle: 'dashed',
      borderColor: theme.palette.primary.main,
      padding: theme.spacing(2),
      color: theme.palette.primary.main,
      '&.error': {
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
      },
    },
    messagePopupImage: {
      width: theme.spacing(20),
      marginRight: theme.spacing(2),
    },
    messageMainText: {
      ...theme.typography.h5,
      color: 'inherit',
    },
    messageSecondaryText: {
      ...theme.typography.subtitle1,
      color: theme.palette.text.secondary,
      '&>span': {
        displa: 'block',
      },
    },
  };
});
