import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles(theme => {
  return {
    inputTextLabel: {
      position: 'relative',
      ...theme.typography.caption,
      color: theme.palette.text.secondary,
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: theme.spacing(2),
      outlineOffset: -1 * theme.spacing(.125),
      outlineStyle: 'dashed',
      outlineWidth: theme.spacing(.125),
      transition: 'transform 200ms ease-out',
      cursor: 'text',
      '&:hover': {
        backgroundColor: theme.palette.grey[50],
      },
      '&:focus-within': {
        color: theme.palette.primary.main,
        backgroundColor: fade(theme.palette.primary.main, 0.025),
        transform: 'scale(1.01)',
      },
      '&.error': {
        color: theme.palette.error.main,
        backgroundColor: fade(theme.palette.error.main, 0.025),
      },
    },
    label: {
      display: 'inline-block',
      lineHeight: `${theme.spacing(3)}px`,
    },
    inputText: {
      borderStyle: 'none',
      marginLeft: theme.spacing(2),
      backgroundColor: 'transparent !important',
      ...theme.typography.body1,
      '&:focus': {
        outline: 'none',
      },
    },
    helperText: {
      position: 'absolute',
      right: 0,
      bottom: -1 * theme.spacing(2),
      lineHeight: `${theme.spacing(2)}px`,
    },
    button: {
      position: 'relative',
      ...theme.typography.button,
      color: theme.palette.text.primary,
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
      borderStyle: 'none',
      backgroundColor: 'transparent',
      outlineOffset: -1 * theme.spacing(.125),
      outlineStyle: 'dashed',
      outlineWidth: theme.spacing(.125),
      cursor: 'pointer',
      transition: 'transform 200ms ease-out',
      '&:hover': {
        backgroundColor: theme.palette.grey[50],
      },
      '&:active': {
        opacity: 0.5,
      },
      '&:focus': {
        outlineColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        backgroundColor: fade(theme.palette.primary.main, 0.025),
        transform: 'scale(1.01)',
      },
    },
  };
});
