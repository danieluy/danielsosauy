import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    icon:{
      marginRight: theme.spacing(2),
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
      outline: 'none',
    },
  };
});
