import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      display: 'flex',
    },
    main: {
      display: 'flex',
      flexGrow: 1,
      padding: theme.spacing(5),
      overflowY: 'auto',
    },
    section:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    aside: {
      display: 'flex',
      flexDirection: 'column',
      width: theme.spacing(35),
      flexShrink: 0,
      marginLeft: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  };
});
