import React, { useRef, useEffect, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
import { STATUS } from '../../../utils/contants';
// Components
import Paragraph from '../../Typography/Paragraph';
import Button from '../../Inputs/Button';
// Material UI
import CloseIcon from '@material-ui/icons/CloseRounded';

function StatusPopup({ status, lang, errorMessage }) {
  const classes = useStyles();
  const ref = useRef();

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.key === 'Escape') {
        // eslint-disable-next-line no-use-before-define
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = useCallback(() => {
    ref.current.classList.remove('animate-enter');
    ref.current.classList.add('animate-leave');
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
        <Button aria-label={lang.dismissMessage} className={classes.closeButton}>
          <CloseIcon aria-hidden onClick={handleClose} />
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
        <Button aria-label={lang.dismissMessage} className={classes.closeButton}>
          <CloseIcon aria-hidden onClick={handleClose} />
        </Button>
      </div >
    );
  }
  return null;
}

StatusPopup.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
  errorMessage: PropTypes.string.isRequired,
  lang: PropTypes.object.isRequired,
};

export default StatusPopup;
