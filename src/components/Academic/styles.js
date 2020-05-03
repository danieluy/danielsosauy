import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    section: {
      width: '100%',
    },
    courseRoot: {
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
    institutionLogo: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.elevationColor[4],
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    institutionLogoImage: {
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
    courseBody: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
      },
    },
    title: {
      position: 'relative',
      color: theme.palette.primary.main,
      outline: 'none',
      transition: 'transform 300ms ease-in-out',
      '&:focus': {
        transform: `translate(${theme.spacing(3)}px)`,
        '&::after': {
          position: 'absolute',
          content: '""',
          left: -1 * theme.spacing(3),
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
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(4),
      },
    },
    scoreRoot: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      '&:focus': {
        outline: 'none',
      },
    },
    progressBar: {
      display: 'flex',
      width: '100%',
      height: theme.spacing(.25),
      backgroundColor: theme.elevationColor[2],
    },
    scoreValue: {
      backgroundColor: theme.palette.primary.main,
      lineHeight: `${theme.spacing(.25)}px`,
      color: theme.palette.text.primary,
      position: 'relative',
    },
    scoreTextValue: {
      position: 'absolute',
      left: 0,
      bottom: theme.spacing(),
    },
    scoreTextRest: {
      position: 'absolute',
      left: 0,
      top: theme.spacing(),
    },
    ariaLabel: {
      position: 'absolute',
      opacity: 0,
    },
    subject: {
      paddingLeft: '0 !important',
    },
    subjectTitle: {
      marginTop: theme.spacing(2),
    },
  };
});
