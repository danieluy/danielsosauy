import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    main: {
      position: 'relative',
      display: 'flex',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    content: {
      padding: theme.spacing(4),
      willChange: 'transform',
      transform: 'translateX(0)',
      transition: 'transform 300ms ease-in-out',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    aside: {
      paddingTop: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width: theme.spacing(25),
      willChange: 'transform',
      transform: 'translateX(0)',
      transition: 'transform 300ms ease-out',
      color: theme.palette.text.primary,
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        right: -1 * theme.spacing(25),
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
      },
    },
    asideButton: {
      position: 'fixed',
      top: theme.spacing(14),
      right: 0,
      display: 'none',
      justifyContent: 'center',
      transition: 'border-radius 500ms linear, transform 500ms ease-out',
      borderStyle: 'none',
      backgroundColor: `${theme.elevationColor[2]} !important`,
      width: theme.spacing(6),
      height: theme.spacing(6),
      borderTopLeftRadius: theme.spacing(3),
      borderBottomLeftRadius: theme.spacing(3),
      zIndex: 1,
      '&>svg': {
        fill: '#FFFFFF',
        animationDirection: 'normal',
        animationDuration: '500ms',
        animationFillMode: 'forwards',
        animationIterationCount: 1,
        animationTimingFunction: 'ease-out',
      },
      '&.asideOpen': {
        borderTopRightRadius: theme.spacing(3),
        borderBottomRightRadius: theme.spacing(3),
      },
      [theme.breakpoints.down('md')]: {
        display: 'flex',
      },
      [theme.breakpoints.down('sm')]: {
        top: 'unset',
        bottom: theme.spacing(10),
      },
    },
    ul: {
      listStyleType: 'none',
    },
  };
});
