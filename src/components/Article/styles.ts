import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles } from '@material-ui/core';

export default makeStyles((theme: Theme) => {
  return createStyles({
    banner: {
      width: '100%',
      marginBottom: theme.spacing(4),
    },
    paragraph: {
      fontSize: theme.typography.body1.fontSize,
    },
    link: {
      color: theme.palette.text.primary,
      fontWeight: 700,
      textDecoration: 'none',
      '&:focus, &:hover': {
        outlineOffset: 4,
        outlineStyle: 'dashed',
        outlineWidth: theme.spacing() / 4,
        outlineColor: theme.palette.text.primary,
      },
    },
  });
});
