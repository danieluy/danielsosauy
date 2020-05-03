import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import useTheme from '@material-ui/core/styles/useTheme';
import ButtonBase from '@material-ui/core/ButtonBase';

function HashLink({ articleId, title, ...rest }) {
  const theme = useTheme();

  return (
    <ButtonBase
      focusRipple
      size="small"
      component={'a'}
      color="inherit"
      href={`#${articleId}`}
      style={{
        height: theme.spacing(6),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        backgroundColor: theme.defaultBackgroundColor,
        textDecoration: 'none',
        ...theme.typography.button,
      }}
      {...rest}
    >
      {title}
    </ButtonBase>
  );
}

HashLink.propTypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HashLink;
