import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    submenu: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
    },
    withOutSubmenu: {
      width: '100%',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: theme.spacing(6),
      paddingLeft: theme.spacing(2),
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&.active': {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.palette.grey[100],
      },
    },
    expandIcon: {
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      top: 0,
      height: theme.spacing(6),
      width: theme.spacing(6),
      color: theme.palette.text.primary,
      '&.active': {
        color: theme.palette.primary.main,
      },
    },
    collapsible: {
      overflow: 'hidden',
    },
  };
});