import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles } from '@material-ui/core';

export default makeStyles((theme: Theme) => {
  const border = theme.spacing(4) / 32; // half of the triangle bullet side
  const heightSideRatio = 0.866; // (√3 * side) / 2;
  const borderLeft = heightSideRatio * 2 * border;

  return createStyles({
    title: {
      marginBottom: theme.spacing(2),
      fontSize: theme.spacing(4),
      position: 'relative',
      fontWeight: theme.typography.fontWeightLight,
      outline: 'none',
      transition: 'transform 300ms ease-in-out',
      '&:focus': {
        transform: `translate(${theme.spacing(3)}px)`,
        '&::after': {
          position: 'absolute',
          content: '""',
          left: -1 * theme.spacing(3),
          top: theme.spacing(2.5),
          width: 0,
          height: 0,
          display: 'inline-block',
          borderTop: `${theme.spacing(border)}px solid transparent`,
          borderBottom: `${theme.spacing(border)}px solid transparent`,
          borderLeft: `${theme.spacing(borderLeft)}px solid ${theme.palette.text.primary}`,
          borderRight: `${theme.spacing(border)}px solid transparent`,
        },
      },
    },
    title2: {
      marginBottom: theme.spacing(),
      outline: 'none',
      fontSize: theme.spacing(3),
    },
    title3: {
      outline: 'none',
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
    subtitle: {
      marginBottom: theme.spacing(),
      outline: 'none',
      fontSize: theme.spacing(3),
      color: theme.palette.text.secondary,
    },
    paragraph: {
      outline: 'none',
      fontSize: theme.spacing(2),
      '&.error': {
        color: theme.palette.error.main,
      },
    },
  });
});
