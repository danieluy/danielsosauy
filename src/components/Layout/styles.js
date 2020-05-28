import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    nav: {
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: theme.spacing(25),
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    footer: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: theme.spacing(25),
      height: theme.spacing(6),
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  };
});