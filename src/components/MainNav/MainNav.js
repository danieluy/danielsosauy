import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNav, selectHomeLang, selectAcademicLang } from '../../redux/selectors';
import { KEY_CODE } from '../../utils';
// Components
import MenuItem from './MenuItem';
import Submenu from './Submenu';

function MainNav() {
  const classes = useStyles();
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
      items: [
        <MenuItem to="/#what-why" label={articles.whatWhy.title} />,
        <MenuItem to="/#accessibility" label={articles.accessibility.title} />,
        <MenuItem to="/#design" label={articles.design.title} />,
        <MenuItem to="/#performance" label={articles.performance.title} />,
        <MenuItem to="/#tech" label={articles.tech.title} />,
      ],
    },
    {
      ref: academicRef,
      lang: lang.academic,
      activePath: '/academic',
      items: [
        <MenuItem to="/academic#software-analist" label={courses[0].title} />,
        <MenuItem to="/academic#web-developer" label={courses[1].title} />,
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
    <nav className={classes.root}>
      <ul role="menubar">
        {subMenus.map((subMenu, i) => (
          <Submenu
            ref={subMenu.ref}
            label={subMenu.lang}
            activePath={subMenu.activePath}
            focusOnMenuNext={() => setFocusNext(i)}
            focusOnMenuPrev={() => setFocusPrev(i)}
          >
            {subMenu.items}
          </Submenu>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
