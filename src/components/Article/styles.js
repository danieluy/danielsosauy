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
    banner: {
      width: '100%',
      marginBottom: theme.spacing(4),
    },
    paragraph: {
      fontSize: theme.typography.body1.fontSize,
    },
    link: {
      color: theme.palette.text.primary,
      fontWeight: '700',
      textDecoration: 'none',
      '&:focus, &:hover': {
        outlineOffset: 4,
        outlineStyle: 'dashed',
        outlineWidth: theme.spacing() / 4,
        outlineColor: theme.palette.text.primary,
      },
    },
  };
});
