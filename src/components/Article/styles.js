import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      flexShrink: 0,
      backgroundColor: theme.elevationColor[1],
      overflow: 'hidden',
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
      paddingTop: 0,
      fontSize: theme.spacing(2.5),
    },
    link: {
      color: theme.palette.text.primary,
      fontWeight: '700',
      textDecoration: 'none',
      '&:focus, &:hover':{
        outlineOffset: 4,
        outlineStyle: 'dashed',
        outlineWidth: theme.spacing() / 4,
        outlineColor: theme.palette.text.primary,
      },
    },
  };
});
