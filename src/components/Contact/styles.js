import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      listStyleType: 'none',
    },
    li: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&:hover, &:focus': {
        outlineColor: theme.palette.text.primary,
        outlineStyle: 'dashed',
        outlineWidth: '2px',
        outlineOffset: '4px',
      },
    },
  };
});