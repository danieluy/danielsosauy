import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    rootStyleVertical: {
    },
    icon: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        margin: 0,
      },
    },
    a: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
      outline: 'none',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    linkText: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  };
});
