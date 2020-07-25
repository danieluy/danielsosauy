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
      boxShadow: `0 ${theme.spacing()}px ${theme.spacing(2)}px -${theme.spacing()}px rgba(0, 0, 0, 0.5)`,
      '&.error': {
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'unset',
        left: theme.spacing(8),
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    messagePopupImage: {
      width: theme.spacing(20),
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        paddingBottom: theme.spacing(2),
      },
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
    closeButton: {
      display: 'flex',
      alignItems: 'center',
      padding: `${theme.spacing(.5)}px !important`,
      [theme.breakpoints.down('xs')]: {
        alignSelf: 'flex-end',
        marginTop: theme.spacing(),
      },
    },
    alertBox: {
      padding: theme.spacing(2),
      background: theme.palette.grey[100],
      marginTop: theme.spacing(2),
    },
  };
});
