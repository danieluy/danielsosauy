import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import routes from './navigation-config';
import { selectAppBarLang } from '../../redux/selectors';
// Components
import NavLink from '../NavLink/NavLink';
// Material UI
import useTheme from '@material-ui/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeIcon from '@material-ui/icons/HomeOutlined';

function AppBar(props) {
  const { location } = props;
  const classes = useStyles();
  const lang = useSelector(selectAppBarLang);
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const isActive = React.useCallback(href => (href === location.pathname), [location.pathname]);

  if (!downSm) return null;

  return (
    <footer aria-label="#Header" className={classes.headerDown}>
      <nav className={classes.nav}>
        <ul className={classes.ulDown}>
          <NavLink
            to="/"
            aria-label={lang.home}
            active={isActive('/')}
            liClassName={classes.mainLiDown}
            icon={HomeIcon}
            vertical
          >
            {lang.home}
          </NavLink>
          <NavLinks />
        </ul>
      </nav>
    </footer>
  );

  function NavLinks() {
    return routes.map(({ name, pathname, icon }) => (
      <NavLink
        key={pathname}
        to={pathname}
        className={classes.a}
        active={isActive(pathname)}
        liClassName={classes.li}
        icon={icon}
        vertical
      >
        {name}
      </NavLink >
    ));
  }
}

AppBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AppBar;
