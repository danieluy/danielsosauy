import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    section: {
      width: '100%',
    },
    course: {
      width: 600,
      margin: '0 auto',
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      borderBottom: `2px dashed ${theme.palette.grey[300]}`,
    },
    institutionLogoImage: {
      width: '100%',
      marginBottom: theme.spacing(4),
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
      backgroundColor: theme.palette.grey[300],
    },
    scoreValue: {
      backgroundColor: theme.palette.grey[700],
      lineHeight: `${theme.spacing(.25)}px`,
      color: theme.palette.text.primary,
      position: 'relative',
    },
    scoreTextValue: {
      position: 'absolute',
      right: 0,
      bottom: theme.spacing(),
    },
    scoreTextRest: {
      position: 'absolute',
      right: 0,
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
