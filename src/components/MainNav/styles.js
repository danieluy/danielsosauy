import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    submenu: {
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
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.palette.grey[100],
      },
    },
    collapsible: {
      overflow: 'hidden',
    },
  };
});