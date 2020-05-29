import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    header: {
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: theme.spacing(25),
      zIndex: 1,
    },
    main: {
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 0,
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
      zIndex: 2,
    },
  };
});