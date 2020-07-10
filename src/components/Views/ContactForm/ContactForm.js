import React, { useEffect, useCallback } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectContactLang } from '../../../redux/selectors';
import useForm from '../../../react-hooks/useForm';
import { sendEmail } from '../../../services';
// Components
import Title from '../../Typography/Title';
import Content from '../Partials/Content/Content';
import InputText from '../../Inputs/InputText';
import InputTextArea from '../../Inputs/InputTextArea';
import Button from '../../Inputs/Button';

function ContactForm() {
  const classes = useStyles();
  const lang = useSelector(selectContactLang);
  const {
    title,
  } = lang;
  const [values, errors, onChange, validate] = useForm({
    name: {
      type: String,
      required: true,
      default: 'Daniel Sosa',
    },
    email: {
      type: String,
      required: true,
      validator: value => {
        if (value.match(/.+@.+\..+/)) {
          return null;
        }
        return new Error('#Invalid email');
      },
      default: 'danielsosa.uy@gmail.com',
    },
    message: {
      type: String,
      required: true,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a leo augue. Morbi pretium, risus vitae lacinia condimentum, tortor urna tempus tortor.',
    },
  });
  const { name, email, message } = values;

  useEffect(() => {
    document.title = `Daniel Sosa | ${title}`;
  }, []);

  const handleSubmit = useCallback(evt => {
    evt.preventDefault();
    if (validate()) {
      sendEmail(name, email, message)
        .then(json => console.log(json))
        .catch(error => console.error(error));
    }
  }, [validate]);

  return (
    <section className={classes.section}>
      <Content component="article" aria-label={title} id="contact-form">
        <img src="assets/img/contact-form/undraw_contact_us_15o2.svg" alt="#contact ilustration" className={classes.banner} />
        <Title tabIndex="0">{title}</Title>
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
