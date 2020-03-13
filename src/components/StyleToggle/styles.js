import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    button: {
      ...theme.button,
      '&.focus': {
        outline: 'none',
      },
    },
  };
});
