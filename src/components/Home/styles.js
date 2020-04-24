import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    link: {
      color: 'inherit',
      ...theme.typography.button,
      textDecoration: 'none',
      outline: 'none',
    },
  };
});
