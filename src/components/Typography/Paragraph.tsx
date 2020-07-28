import React from 'react';
import useStyles from './styles';
// Material UI
import Typography from '@material-ui/core/Typography';

interface Props {
  error?: boolean,
  children: string | Array<string | JSX.Element>,
  color?: "error" | "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary" | undefined
}

function Paragraph(props: Props) {
  const { children, error, color, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography
      component="p"
      className={`${classes.paragraph} ${error ? 'error' : ''}`}
      color={color}
      {...rest}
    >
      {children}
    </Typography>
  );
}

export default Paragraph;
