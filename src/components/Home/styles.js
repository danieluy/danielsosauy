import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      display: 'flex',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      padding: theme.spacing(5),
      overflowY: 'auto',
    },
    aside: {
      display: 'flex',
      flexDirection: 'column',
      width: theme.spacing(35),
      flexShrink: 0,
      padding: theme.spacing(5),
      borderLeftColor: theme.palette.grey[400],
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
    },
  };
});
