import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      width: 600,
      margin: '0 auto',
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      borderBottom: `2px dashed ${theme.palette.grey[300]}`,
    },
  };
});
