import React, { Fragment as section } from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectStuffLang } from '../../redux/selectors';
// Components
import MainContent, { Subtitle } from '../MainContent/MainContent';
import { Typography } from '@material-ui/core';

function Stuff(props) {
  const classes = useStyles();
  const lang = useSelector(selectStuffLang);
  const {
    title,
  } = lang;
  document.title = `Daniel Sosa | ${title}`;

  return (
    <MainContent
      content={(
        <section className={classes.section}>
          <Typography variant="h3" color="textPrimary">{title}</Typography>
        </section>
      )}
    />
  );
}

export default Stuff;
