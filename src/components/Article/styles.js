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
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    },
    banner: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.elevationColor[4],
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    bannerImage: {
      padding: theme.spacing(2),
      width: theme.spacing(60),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4),
        width: theme.spacing(80),
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    title: {
      position: 'relative',
      paddingLeft: theme.spacing(4),
      color: theme.palette.primary.main,
      outline: 'none',
      transition: 'transform 300ms ease-in-out',
      '&:focus': {
        transform: `translate(${theme.spacing(3)}px)`,
        '&::after': {
          position: 'absolute',
          content: '""',
          left: theme.spacing(),
          top: theme.spacing(2),
          width: 0,
          height: 0,
          display: 'inline-block',
          borderTop: `${theme.spacing(2)}px solid transparent`,
          borderBottom: `${theme.spacing(2)}px solid transparent`,
          borderLeft: `${theme.spacing(2)}px solid ${theme.palette.primary.main}`,
          borderRight: `${theme.spacing(2)}px solid transparent`,
          [theme.breakpoints.down('md')]: {
            top: theme.spacing(6),
            left: -1 * theme.spacing(3),
          },
          [theme.breakpoints.down('xs')]: {
            top: theme.spacing(5),
            borderTopWidth: theme.spacing(1.5),
            borderBottomWidth: theme.spacing(1.5),
            borderLeftWidth: theme.spacing(1.5),
            borderRightWidth: theme.spacing(1.5),
          },
        },
      },
      [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(4),
        paddingLeft: 0,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(4),
      },
    },
    paragraph: {
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(4),
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(2),
      },
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
