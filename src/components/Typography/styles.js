import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => {
  return {
    title: {
      marginBottom: theme.spacing(2),
      outline: 'none',
      fontSize: theme.spacing(4),
      ...onFocus(theme.spacing(4)),
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
    },
  };

  function onFocus(fontSize) {
    const border = fontSize / 32; // half of the triangle bullet side
    const heightSideRatio = 0.866; // (√3 * side) / 2;
    const borderLeft = heightSideRatio * 2 * border;
    return {
      position: 'relative',
      // paddingLeft: theme.spacing(4),
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
    };
  }
});
