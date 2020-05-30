import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNav, selectHomeLang } from '../../redux/selectors';
// Components
import MenuItem from './MenuItem';
import Submenu from './Submenu';

function MainNav() {
  const classes = useStyles();
  const { hash } = useLocation();
  const lang = useSelector(selectNav);
  const { articles } = useSelector(selectHomeLang);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <nav className={classes.root}>
      <ul role="menubar">
        <Submenu label={lang.home} to="/">
          <MenuItem to="/#what-why" label={articles.whatWhy.title} />
          <MenuItem to="/#accessibility" label={articles.accessibility.title} />
          <MenuItem to="/#design" label={articles.design.title} />
          <MenuItem to="/#performance" label={articles.performance.title} />
          <MenuItem to="/#tech" label={articles.tech.title} />
        </Submenu>
        <MenuItem to="/academic" label={lang.academic} />
      </ul>
    </nav>
  );
}

export default MainNav;
