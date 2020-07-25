
import * as React from 'react';
import * as PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectContactLang } from '../../redux/selectors';
// Material UI
import Typography from '@material-ui/core/Typography';
import CopirightIcon from '@material-ui/icons/CopyrightOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import PhoneIcon from '@material-ui/icons/PhoneOutlined';

function ContactFooter() {
  const classes = useStyles();
  const lang = useSelector(selectContactLang);

  return (
    <ul
      role="menu"
      aria-label={lang.title}
      className={classes.root}
    >
      <li role="none" className={classes.li}>
        <CopirightIcon className={classes.icon} />
        <Typography>Daniel Sosa 2020</Typography>
      </li>
      <li role="none" className={classes.li}>
        <a
          href="mailto:danielsosa.uy@gmail.com?Subject=Contact%20from%20www.danielsosa.uy"
          target="blank"
          className={classes.link}
          aria-label={`${lang.sendEmail} danielsosa.uy@gmail.com`}
          title={`${lang.sendEmail} danielsosa.uy@gmail.com`}
        >
          <EmailIcon className={classes.icon} aria-hidden />
          <Typography className={classes.text}>danielsosa.uy@gmail.com</Typography>
        </a>
      </li>
      <li role="none" className={classes.li}>
        <a
          href="tel:0059899636065"
          target="blank"
          className={classes.link}
          aria-label={`${lang.call} 099 636 605 Uruguay`}
          title={`${lang.call} 099 636 605 Uruguay`}
        >
          <PhoneIcon className={classes.icon} aria-hidden />
          <Typography className={classes.text}>(+598) 99 636 065</Typography>
        </a>
      </li>
    </ul>
  );
}

export default ContactFooter;
