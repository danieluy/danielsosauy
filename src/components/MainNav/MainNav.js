import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNav, selectHomeLang, selectAcademicLang } from '../../redux/selectors';
// Components
import MenuItem from './MenuItem';
import Submenu from './Submenu';
// Material UI
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SchoolIcon from '@material-ui/icons/SchoolOutlined';

function MainNav({ headerOpen }) {
  const { hash } = useLocation();
  const lang = useSelector(selectNav);
  const { articles } = useSelector(selectHomeLang);
  const { courses } = useSelector(selectAcademicLang);
  const homeRef = useRef();
  const academicRef = useRef();
  const subMenus = useMemo(() => [
    {
      ref: homeRef,
      lang: lang.home,
      activePath: '/',
      icon: HomeIcon,
      items: [
        <MenuItem to="/#what-why" label={articles.whatWhy.title} key={articles.whatWhy.title} />,
        <MenuItem to="/#accessibility" label={articles.accessibility.title} key={articles.accessibility.title} />,
        <MenuItem to="/#design" label={articles.design.title} key={articles.design.title} />,
        <MenuItem to="/#performance" label={articles.performance.title} key={articles.performance.title} />,
        <MenuItem to="/#tech" label={articles.tech.title} key={articles.tech.title} />,
      ],
    },
    {
      ref: academicRef,
      lang: lang.academic,
      activePath: '/academic',
      icon: SchoolIcon,
      items: [
        <MenuItem to="/academic#software-analist" label={courses[0].title} key={courses[0].title} />,
        <MenuItem to="/academic#web-developer" label={courses[1].title} key={courses[1].title} />,
      ],
    },
  ]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const setFocusNext = useCallback(idx => {
    const lastIdx = subMenus.length - 1;
    let nextIdx = idx + 1;
    if (nextIdx > lastIdx) {
      nextIdx = 0;
    }
    subMenus[nextIdx].ref.current.focus();
  }, []);

  const setFocusPrev = useCallback(idx => {
    const lastIdx = subMenus.length - 1;
    let nextIdx = idx - 1;
    if (nextIdx < 0) {
      nextIdx = lastIdx;
    }
    subMenus[nextIdx].ref.current.focus();
  }, []);

  return (
    <nav>
      <ul role="menubar">
        {subMenus.map((subMenu, i) => (
          <Submenu
            key={i}
            ref={subMenu.ref}
            label={subMenu.lang}
            icon={subMenu.icon}
            activePath={subMenu.activePath}
            focusOnMenuNext={() => setFocusNext(i)}
            focusOnMenuPrev={() => setFocusPrev(i)}
            headerOpen={headerOpen}
          >
            {subMenu.items}
          </Submenu>
        ))}
      </ul>
    </nav>
  );
}

MainNav.propTypes = {
  headerOpen: PropTypes.bool,
};

export default MainNav;
