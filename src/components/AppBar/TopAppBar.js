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
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/HomeOutlined';

function AppBar(props) {
  const classes = useStyles();
  const lang = useSelector(selectAppBarLang);
  const status = useSelector(selectStatus);
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const routes = getRoutes(lang);

  if (downSm && status.styles) return null;

  return (
    <header aria-label="#Header" className={classes.headerTop}>
      <nav className={classes.nav}>
        <ul className={classes.ulTop}>
          <li className={classes.mainLiTop}>
            <NavLink
              to="/"
              aria-label={lang.home}
              icon={HomeIcon}
            >
              <Typography variant="h6" component="span">www.danielsosa.uy</Typography>
            </NavLink>
          </li>
          <NavLinks />
        </ul>
      </nav>
    </header>
  );

  function NavLinks() {
    return routes.map(({ name, pathname, icon }) => (
      <li className={classes.li} key={pathname}>
        <NavLink
          to={pathname}
          className={classes.a}
          icon={icon}
        >
          {name}
        </NavLink >
      </li>
    ));
  }
}

AppBar.propTypes = {};

export default AppBar;
