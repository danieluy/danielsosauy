import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    header: {
      height: theme.spacing(14),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(5),
      borderBottomColor: theme.palette.grey[400],
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
    },
    nav: {
      width: '100%',
    },
    ul: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      listStyleType: 'none',
    },
    li: {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      height: theme.spacing(4),
      marginLeft: theme.spacing(1),
    },
    a: {
      ...theme.button,
      fontSize: theme.spacing(3),
    },
    button: theme.button,
  };
});
