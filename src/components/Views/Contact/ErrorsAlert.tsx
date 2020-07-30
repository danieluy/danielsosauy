import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectContactLang } from '../../../redux/selectors';
// Components
import Paragraph from '../../Typography/Paragraph';

interface Props {
  open: boolean,
  errors: any,
}

function ErrorsAlert({ open = false, errors }: Props) {
  const lang = useSelector(selectContactLang);
  const classes = useStyles();

  const alertMessage = useMemo(() => {
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

export default ErrorsAlert;
