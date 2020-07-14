import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { STATUS } from '../../../utils/contants';
// Material UI
import Typography from '@material-ui/core/Typography';

function StatusPopup({ status, lang, errorMessage }) {
  const classes = useStyles();
  const ref = useRef();

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.key === 'Escape') {
        ref.current.classList.remove('animate-enter');
        ref.current.classList.add('animate-leave');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (status === STATUS.SUCCESS) {
    return (
      <div ref={ref} role="status" className={`${classes.messagePopup} animate-enter`}>
        <img
          aria-hidden
          className={classes.messagePopupImage}
          src="assets/img/contact-form/undraw_order_confirmed_aaw7.svg"
          alt={lang.successIllustrationAlt}
        />
        <Typography className={classes.messageMainText}>
          {lang.successMessage}
          <br />
          <span className={classes.messageSecondaryText}>
            {lang.discardMessageInstruction}
          </span>
        </Typography>
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
        <Typography className={classes.messageMainText}>
          {errorMessage}
          <br />
          <span className={classes.messageSecondaryText}>
            {lang.discardMessageInstruction}
          </span>
        </Typography>
      </div >
    );
  }

  // if (status === STATUS.SUCCESS) {
  //   return (
  //     <Typography ref={ref} role="status" className={`${classes.messagePopup} animate-enter`}>
  //       <img
  //         aria-hidden
  //         className={classes.messagePopupImage}
  //         src="assets/img/contact-form/undraw_order_confirmed_aaw7.svg"
  //         alt={lang.successIllustrationAlt}
  //       />
  //       <span>
  //         {lang.successMessage}
  //       </span>
  //     </Typography>
  //   );
  // }
  // if (status === STATUS.ERROR) {
  //   return (
  //     <Typography ref={ref} role="status" className={`${classes.messagePopup} animate-enter error`}>
  //       <img
  //         aria-hidden
  //         className={classes.messagePopupImage}
  //         src="assets/img/contact-form/undraw_warning_cyit.svg"
  //         alt={lang.successIllustrationAlt}
  //       />
  //       <span>
  //         {errorMessage}
  //       </span>
  //     </Typography>
  //   );
  // }
  return null;
}

StatusPopup.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
  errorMessage: PropTypes.string.isRequired,
  lang: PropTypes.object.isRequired,
};

export default StatusPopup;
