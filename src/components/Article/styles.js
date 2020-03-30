import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.elevationColor[1],
      overflow: 'hidden',
      flexShrink: 0,
      marginBottom: theme.spacing(4),
    },
    banner: {
      width: '100%',
    },
    title: {
      padding: theme.spacing(4),
    },
    paragraph: {
      columnCount: 3,
      padding: theme.spacing(4),
      paddingTop: 0,
      [theme.breakpoints.down('sm')]: {
        columnCount: 2,
      },
      [theme.breakpoints.down('xs')]: {
        columnCount: 1,
      },
    },
  };
});
