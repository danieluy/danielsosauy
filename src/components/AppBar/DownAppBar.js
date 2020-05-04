import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectAppBarLang, selectStatus } from '../../redux/selectors';
import getRoutes from './navigation-config';
// Components
import NavLink from '../NavLink/NavLink';
// Material UI
import useTheme from '@material-ui/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeIcon from '@material-ui/icons/HomeOutlined';

function AppBar(props) {
  const classes = useStyles();
  const lang = useSelector(selectAppBarLang);
  const status = useSelector(selectStatus);
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const routes = getRoutes(lang);

  if (!downSm || !status.styles) return null;

  return (
    <footer aria-label="#Header" className={classes.headerDown}>
      <nav className={classes.nav}>
        <ul className={classes.ulDown}>
          <li className={classes.mainLiDown}>
            <NavLink
              to="/"
              aria-label={lang.home}
              icon={HomeIcon}
              vertical
            >
              {lang.home}
            </NavLink>
          </li>
          <NavLinks />
        </ul>
      </nav>
    </footer>
  );

  function NavLinks() {
    return routes.map(({ name, pathname, icon }) => (
      <li className={classes.li} key={pathname}>
        <NavLink
          to={pathname}
          className={classes.a}
          icon={icon}
          vertical
        >
          {name}
        </NavLink >
      </li>
    ));
  }
}

AppBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AppBar;
