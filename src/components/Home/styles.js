import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    secNav: {
      color: theme.palette.text.primary,
    },
    link: {
      color: 'inherit',
      ...theme.typography.button,
      textDecoration: 'none',
      outline: 'none',
    },
  };
});
