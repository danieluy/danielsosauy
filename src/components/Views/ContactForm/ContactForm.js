import React, { useEffect, useCallback, useState } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectContactLang } from '../../../redux/selectors';
import useForm from '../../../react-hooks/useForm';
import { sendEmail } from '../../../services';
import formTemplate from './template';
// Components
import Title from '../../Typography/Title';
import Content from '../Partials/Content/Content';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';
import Button from '../../Inputs/Button';
const STATUS = {
  IDLE: 'IDLE',
  SENDING: 'SENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

function ContactForm() {
  const lang = useSelector(selectContactLang);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState(lang.unhandledErrorMessage);
  const classes = useStyles();
  const {
    title,
  } = lang;
  const [values, errors, onChange, validate] = useForm(formTemplate);
  const { name, email, message } = values;

  useEffect(() => {
    document.title = `Daniel Sosa | ${title}`;
  }, []);

  const handleSubmit = useCallback(evt => {
    evt.preventDefault();
    if (validate()) {
      setStatus(STATUS.SENDING);
      sendEmail(name, email, message)
        .then(() => setStatus(STATUS.SUCCESS))
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
  }, [validate]);

  return (
    <section className={classes.section}>
      <Content component="article" aria-label={title} id="contact-form">
        <img src="assets/img/contact-form/undraw_contact_us_15o2.svg" alt="#contact ilustration" className={classes.banner} />
        <Title tabIndex="0">{title}</Title>
        <p>{status}</p>
        {status === STATUS.ERROR && <p>{errorMessage}</p>}
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <InputText
            id="input-name"
            label={lang.name}
            value={name || ''}
            name="name"
            onChange={onChange}
            error={errors.name}
            autoComplete="off"
            leftPadding={72}
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
            fullWidth
          />
          <Button type="submit" onClick={handleSubmit} fullWidth>
            {lang.send}
          </Button>
        </form>
      </Content>
    </section>
  );
}

export default ContactForm;
