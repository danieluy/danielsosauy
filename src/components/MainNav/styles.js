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
    submenuLink: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: theme.spacing(6),
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
    submenuIcon: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
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
      '&.hidden': {
        display: 'none',
      },
    },
    collapsible: {
      overflow: 'hidden',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: theme.spacing(6),
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
  };
});