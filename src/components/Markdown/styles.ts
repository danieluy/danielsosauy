import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      '& p': {
        ...theme.typography.body1,
      },
      '& p+p': {
        marginTop: theme.spacing(),
      },
      '& a': {
        color: theme.palette.text.primary,
        fontWeight: 700,
        textDecoration: 'none',
        '&:focus, &:hover': {
          outlineOffset: 4,
          outlineStyle: 'dashed',
          outlineWidth: theme.spacing() / 4,
          outlineColor: theme.palette.text.primary,
        },
      }
    },
  });
});