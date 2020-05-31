import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    title: {
      marginBottom: theme.spacing(2),
      outline: 'none',
      fontSize: theme.spacing(4),
    },
    title2: {
      marginBottom: theme.spacing(),
      outline: 'none',
      fontSize: theme.spacing(3),
    },
    title3: {
      outline: 'none',
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
    subtitle: {
      marginBottom: theme.spacing(),
      outline: 'none',
      fontSize: theme.spacing(3),
      color: theme.palette.text.secondary,
    },
    paragraph: {
      outline: 'none',
      fontSize: theme.spacing(2),
    },
  };
});
