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
      color: theme.palette.text.secondary,  
    },
    icon: {
      marginRight: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      '&:hover, &:focus': {
        outlineColor: theme.palette.text.secondary,
        outlineStyle: 'dashed',
        outlineWidth: '2px',
        outlineOffset: '4px',
      },
    },
  };
});