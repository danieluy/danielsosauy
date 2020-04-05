import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import routes from './navigation-config';
// Components
import NavLink from '../NavLink/NavLink';
// Material UI
import useTheme from '@material-ui/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/HomeOutlined';

function AppBar(props) {
  const { location } = props;
  const classes = useStyles();
  const lang = useSelector(state => state.lang.appBar);
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));

  const isActive = React.useCallback(href => (href === location.pathname), [location.pathname]);

  if (downSm) return null;

  return (
    <header aria-label="#Header" className={classes.headerTop}>
      <nav className={classes.nav}>
        <ul className={classes.ulTop}>
          <NavLink
            to="/"
            aria-label={lang.home}
            active={isActive('/')}
            liClassName={classes.mainLiTop}
            icon={HomeIcon}
          >
            <Typography variant="h6" component="span">www.danielsosa.uy</Typography>
          </NavLink>
          {renderNavLinks()}
        </ul>
      </nav>
    </header>
  );

  function renderNavLinks() {
    return routes.map(({ name, pathname, icon }) => (
      <NavLink
        key={pathname}
        to={pathname}
        className={classes.a}
        active={isActive(pathname)}
        liClassName={classes.li}
        icon={icon}
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
