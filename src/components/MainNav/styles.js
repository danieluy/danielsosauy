import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles(theme => {
  const active = {
    color: theme.palette.primary.main,
    outlineOffset: -1 * theme.spacing(.125),
    outlineStyle: 'dashed',
    outlineWidth: theme.spacing(.125),
    backgroundColor: fade(theme.palette.primary.main, 0.025),
  };

  const focus = {
    outlineOffset: -1 * theme.spacing(.125),
    outlineStyle: 'dashed',
    outlineWidth: theme.spacing(.125),
    backgroundColor: theme.palette.grey[50],
    [theme.breakpoints.down('sm')]: {
      outline: 'none',
      backgroundColor: 'initial',
    },
  };

  return {
    submenu: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
    },
    submenuLink: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: theme.spacing(6),
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&.active': {
        ...active,
      },
      '&:focus': {
        ...focus,
      },
    },
    submenuIcon: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    expandIcon: {
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      top: 0,
      height: theme.spacing(6),
      width: theme.spacing(6),
      color: theme.palette.text.primary,
      '&.active': {
        color: theme.palette.primary.main,
      },
      '&.hidden': {
        display: 'none',
      },
    },
    collapsible: {
      overflow: 'hidden',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: theme.spacing(6),
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&.active': {
        ...active,
      },
      '&:focus': {
        ...focus,
      },
    },
  };
});