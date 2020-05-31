import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNav, selectHomeLang, selectAcademicLang } from '../../redux/selectors';
// Components
import MenuItem from './MenuItem';
import Submenu from './Submenu';

function MainNav() {
  const classes = useStyles();
  const { hash } = useLocation();
  const lang = useSelector(selectNav);
  const { articles } = useSelector(selectHomeLang);
  const { courses } = useSelector(selectAcademicLang);

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
        <Submenu label={lang.academic} to="/academic">
          <MenuItem to="/academic#software-analist" label={courses[0].title} />
          <MenuItem to="/academic#web-developer" label={courses[1].title} />
        </Submenu>
      </ul>
    </nav>
  );
}

export default MainNav;
