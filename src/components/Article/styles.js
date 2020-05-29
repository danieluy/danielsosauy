import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    root: {
      width: 600,
      margin: '0 auto',
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    banner: {
      width: '100%',
      marginBottom: theme.spacing(6),
    },
    title: {
      position: 'relative',
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
      outline: 'none',
      transition: 'transform 300ms ease-in-out',
      fontSize: theme.typography.h4.fontSize,
      // '&:focus': {
      //   transform: `translate(${theme.spacing(3)}px)`,
      //   '&::after': {
      //     position: 'absolute',
      //     content: '""',
      //     left: theme.spacing(),
      //     top: theme.spacing(2),
      //     width: 0,
      //     height: 0,
      //     display: 'inline-block',
      //     borderTop: `${theme.spacing(2)}px solid transparent`,
      //     borderBottom: `${theme.spacing(2)}px solid transparent`,
      //     borderLeft: `${theme.spacing(2)}px solid ${theme.palette.primary.main}`,
      //     borderRight: `${theme.spacing(2)}px solid transparent`,
      //     [theme.breakpoints.down('md')]: {
      //       top: theme.spacing(6),
      //       left: -1 * theme.spacing(3),
      //     },
      //     [theme.breakpoints.down('xs')]: {
      //       top: theme.spacing(5),
      //       borderTopWidth: theme.spacing(1.5),
      //       borderBottomWidth: theme.spacing(1.5),
      //       borderLeftWidth: theme.spacing(1.5),
      //       borderRightWidth: theme.spacing(1.5),
      //     },
      //   },
      // },
      // [theme.breakpoints.down('md')]: {
      //   paddingTop: theme.spacing(4),
      //   paddingLeft: 0,
      // },
      // [theme.breakpoints.down('xs')]: {
      //   fontSize: theme.spacing(4),
      // },
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
