import React, { useEffect, useCallback, useState, useRef } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectContactLang } from '../../../redux/selectors';
import useForm from '../../../react-hooks/useForm';
import { sendEmail } from '../../../services';
import formTemplate from './template';
import { STATUS } from '../../../utils/contants';
// Components
import Title from '../../Typography/Title';
import Paragraph from '../../Typography/Paragraph';
import Content from '../Partials/Content/Content';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';
import Button from '../../Inputs/Button';
import StatusPopup from './StatusPopup';

function ContactForm() {
  const lang = useSelector(selectContactLang);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState(lang.unhandledErrorMessage);
  const [reactToErros, setReactOnErrors] = useState(false);
  const ref = useRef();
  const classes = useStyles();
  const {
    title,
  } = lang;
  const [values, errors, onChange, validate] = useForm(formTemplate);
  const { name, email, message } = values;

  useEffect(() => {
    document.title = `Daniel Sosa | ${title}`;
  }, []);

  useEffect(() => {
    if (reactToErros) {
      /**
       * #####       ####
       *   #    ###  #   #  ###
       *   #   #   # #   # #   #
       *   #   #   # #   # #   #
       *   #    ###  ####   ###
       *
       * ToDo: Add snippet with role="alert" on top of form
       */
      // Set focus on first form input with error
      const formInput = Array.from(ref.current.children)
        .map(el => el.children[1])
        .find(el => {
          if (el) {
            return !!errors[el.name];
          }
          return false;
        });
      if (formInput) {
        setTimeout(() => {
          formInput.focus();
        }, 0);
      }
      setReactOnErrors(false);
    }
  }, [errors, ref.current]);

  const handleSubmit = useCallback(evt => {
    evt.preventDefault();
    const { valid } = validate();
    if (valid) {
      setStatus(STATUS.WORKING);
      sendEmail(name, email, message)
        .then(() => {
          setTimeout(() => {
            setStatus(STATUS.SUCCESS);
          }, 1000);
        })
        .catch(error => {
          if (error.message === 'Bad Request') {
            setErrorMessage(lang.badRequestErrorMessage);
          }
          else {
            setErrorMessage(lang.unhandledErrorMessage);
          }
          setStatus(STATUS.ERROR);
        });
    }
    else {
      setReactOnErrors(true);
    }
  }, [validate]);

  return (
    <section className={classes.section}>
      <Content component="article" aria-label={title} id="contact-form" style={{ minHeight: window.innerHeight }}>
        <img src="assets/img/contact-form/undraw_contact_us_15o2.svg" alt={lang.contactIllustrationAlt} className={classes.banner} />
        <ul aria-hidden>
          <h3>ToDo</h3>
          <li>Check form accessibility</li>
          <ul>
            <li>Error notifications</li>
          </ul>
          <li>Make popup responsive</li>
          <li>Recaptcha</li>
          <li>Update home with what was done here</li>
          <ul>
            <li>Made to comply with <a href="https://www.w3.org/WAI/tutorials/forms/">https://www.w3.org/WAI/tutorials/forms/</a></li>
            <li>Status alert</li>
            <li>...</li>
          </ul>
        </ul>
        <Title tabIndex="0">{title}</Title>
        <Paragraph>#The following three form fields must be completed.</Paragraph>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          ref={ref}
        >
          <InputText
            id="input-name"
            label={lang.name}
            value={name || ''}
            name="name"
            onChange={onChange}
            error={errors.name}
            autoComplete="off"
            leftPadding={72}
            required
            fullWidth
            autoFocus
          />
          <InputText
            id="input-email"
            label={lang.email}
            value={email || ''}
            name="email"
            onChange={onChange}
            error={errors.email}
            autoComplete="off"
            leftPadding={72}
            required
            fullWidth
          />
          <InputTextArea
            id="input-message"
            label={lang.message}
            value={message || ''}
            name="message"
            onChange={onChange}
            error={errors.message}
            rows="3"
            leftPadding={72}
            required
            fullWidth
          />
          <Button type="submit" onClick={handleSubmit} fullWidth>
            {lang.send}
          </Button>
        </form>
        <StatusPopup
          status={status}
          errorMessage={errorMessage}
          lang={lang}
        />
      </Content>
    </section>
  );
}

export default ContactForm;
