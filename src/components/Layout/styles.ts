import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles } from '@material-ui/core';

export default makeStyles((theme: Theme) => {
  return createStyles({
    header: {
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 1,
      backgroundColor: '#FFF',
      overflowX: 'hidden',
      transition: 'width 300ms ease-in-out',
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(6),
      },
    },
    main: {
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 0,
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    footer: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: 0,
      height: theme.spacing(6),
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      zIndex: 2,
      paddingRight: theme.spacing(4),
      background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.8), rgb(255,255,255), rgb(255,255,255), rgb(255,255,255), rgb(255,255,255))',
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
        justifyContent: 'center',
      },
    },
  });
});