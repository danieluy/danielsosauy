import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    header: {
      height: theme.spacing(8),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme.palette.text.primary,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      backgroundColor: theme.elevationColor[1],
    },
    nav: {
      width: '100%',
      color: 'inherit',
    },
    ul: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      listStyleType: 'none',
      color: 'inherit',
    },
    li: {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
    },
    mainLi: {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
      flexGrow: 1,
      margin: 0,
    },
  };
});
