import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectContactLang } from '../../../redux/selectors';
// Components
import Paragraph from '../../Typography/Paragraph';

function ErrorsAlert({ open, errors }) {
  const lang = useSelector(selectContactLang);
  const classes = useStyles();

  const alertMessage = useMemo(() => {
    console.log('errors', errors);
    if (errors.name) return lang.nameIsRequired;
    if (errors.email) return lang.emailIsRequired;
    if (errors.message) return lang.messageIsRequired;
    return '';
  }, [errors]);

  if (!open) {
    return null;
  }

  return (
    <div role="alert" className={classes.alertBox}>
      <Paragraph error>{alertMessage}</Paragraph>
      <Paragraph error>{lang.tookYouToField}</Paragraph>
    </div>
  );
}

ErrorsAlert.propTypes = {
  open: PropTypes.bool,
  errors: PropTypes.object.isRequired,
};

ErrorsAlert.defaultProps = {
  open: false,
};

export default ErrorsAlert;
