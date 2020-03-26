import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    main: {
      display: 'flex',
      overflowY: 'auto',
    },
    content: {
      padding: theme.spacing(4),
      willChange: 'transform',
      transform: 'translateX(0)',
      transition: 'transform 300ms ease-in-out',
    },
    aside: {
      paddingTop: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width: theme.spacing(25),
      willChange: 'transform',
      transform: 'translateX(0)',
      transition: 'transform 300ms ease-in-out',
    },
  };
});
