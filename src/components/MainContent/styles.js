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
      transition: 'transform 300ms ease-in-out',
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        right: -1 * theme.spacing(25),
      },
    },
    asideButton: {
      position: 'absolute',
      display: 'none',
      justifyContent: 'center',

      transition: 'border-radius 750ms linear',
      borderStyle: 'none',
      backgroundColor: `${theme.elevationColor[1]} !important`,
      width: theme.spacing(6),
      height: theme.spacing(6),
      borderTopLeftRadius: theme.spacing(3),
      borderBottomLeftRadius: theme.spacing(3),
      animationDirection: 'normal',
      animationDuration: '500ms',
      animationFillMode: 'forwards',
      animationIterationCount: 1,
      animationTimingFunction: 'ease-out',
      zIndex: 1,
      '&.asideOpen': {
        borderTopRightRadius: theme.spacing(3),
        borderBottomRightRadius: theme.spacing(3),
      },
      '&>svg': {
        fill: '#FFFFFF',
      },
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        right: theme.spacing(25),
      },
    },
  };
});
