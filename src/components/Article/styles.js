import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      backgroundColor: theme.elevationColor[1],
      overflow: 'hidden',
      flexShrink: 0,
      marginBottom: theme.spacing(4),
      padding: theme.spacing(4),
    },
    banner: {
      width: '40%',
    },
    title: {
      paddingLeft: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paragraph: {
      paddingLeft: theme.spacing(4),
      // columnCount: 3,
      paddingTop: 0,
      [theme.breakpoints.down('sm')]: {
        // columnCount: 2,
      },
      [theme.breakpoints.down('xs')]: {
        // columnCount: 1,
      },
    },
    link: {
      color: theme.palette.text.primary,
      fontWeight: '700',
      textDecoration: 'none',
      '&:focus':{
        outlineOffset: 4,
        outlineStyle: 'dashed',
        outlineWidth: theme.spacing() / 4,
        outlineColor: theme.palette.text.primary,
      },
    },
  };
});
