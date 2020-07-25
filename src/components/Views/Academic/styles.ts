import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => {
  return createStyles({
    section: {
      width: '100%',
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
  });
});
