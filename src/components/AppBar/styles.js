import makeStyles from '@material-ui/core/styles/makeStyles';


export default makeStyles(theme => {
  const header = {
    height: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.elevationColor[2],
  };

  const ul = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    color: 'inherit',
  };

  const mainLi = {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    margin: 0,
  };

  return {
    headerTop: {
      ...header,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    headerDown: {
      ...header,
      paddingLeft: 0,
      paddingRight: 0,
    },
    nav: {
      width: '100%',
      color: 'inherit',
    },
    ulTop: {
      ...ul,
    },
    ulDown: {
      ...ul,
      justifyContent: 'space-around',
    },
    li: {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
    },
    mainLiTop: {
      ...mainLi,
      flexGrow: 1,
    },
    mainLiDown: {
      ...mainLi,
      flexGrow: 0,
    },
  };
});
