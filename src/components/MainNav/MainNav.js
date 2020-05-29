import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNav } from '../../redux/selectors';
// Components
import MenuItem from './MenuItem';
import Submenu from './Submenu';

function MainNav() {
  const classes = useStyles();
  const lang = useSelector(selectNav);
  console.log(lang);

  return (
    <nav className={classes.root}>
      <ul role="menubar">
        <Submenu label={lang.home} to="/">
          <MenuItem to="/#whatandwhy" label="What and Why?" />
          <MenuItem to="/#accessibility" label="Accessibility" />
        </Submenu>
        <MenuItem to="/stuff" label={lang.stuff} />
        <MenuItem to="/academimc" label={lang.academic} />
      </ul>
    </nav>
  );
}

MainNav.proptypes = {};

export default MainNav;
