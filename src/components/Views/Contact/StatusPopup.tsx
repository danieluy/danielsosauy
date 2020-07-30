import React, { useRef, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
import { STATUS } from '../../../utils/contants';
// Components
import Paragraph from '../../Typography/Paragraph';
import Button from '../../Inputs/Button';
// Material UI
import CloseIcon from '@material-ui/icons/CloseRounded';

interface Props {
  status: STATUS,
  errorMessage: string,
  lang: any,
}

function StatusPopup({ status, lang, errorMessage }: Props) {
  const classes = useStyles();
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        // eslint-disable-next-line no-use-before-define
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = useCallback(() => {
    const current = ref.current as unknown as HTMLElement;
    if (current) {
      current.classList.remove('animate-enter');
      current.classList.add('animate-leave');
    }
  }, [ref.current]);

  if (status === STATUS.SUCCESS) {
    return (
      <div ref={ref} role="status" className={`${classes.messagePopup} animate-enter`}>
        <img
          aria-hidden
          className={classes.messagePopupImage}
          src="assets/img/contact-form/undraw_order_confirmed_aaw7.svg"
          alt={lang.successIllustrationAlt}
        />
        <Paragraph className={classes.messageMainText}>
          {lang.successMessage}
          <br />
          <span className={classes.messageSecondaryText}>
            {lang.discardMessageInstruction}
          </span>
        </Paragraph>
        <Button aria-hidden onClick={handleClose} className={classes.closeButton}>
          <CloseIcon />
        </Button>
      </div >
    );
  }

  if (status === STATUS.ERROR) {
    return (
      <div ref={ref} role="status" className={`${classes.messagePopup} animate-enter error`}>
        <img
          aria-hidden
          className={classes.messagePopupImage}
          src="assets/img/contact-form/undraw_warning_cyit.svg"
          alt={lang.errorIllustrationAlt}
        />
        <Paragraph className={classes.messageMainText}>
          {errorMessage}
          <br />
          <span className={classes.messageSecondaryText}>
            {lang.discardMessageInstruction}
          </span>
        </Paragraph>
        <Button aria-hidden onClick={handleClose} className={classes.closeButton}>
          <CloseIcon />
        </Button>
      </div >
    );
  }
  return null;
}

export default StatusPopup;
