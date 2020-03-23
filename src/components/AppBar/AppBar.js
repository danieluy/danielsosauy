import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
// Components
import NavLink from '../NavLink/NavLink';
// Material UI
import Typography from '@material-ui/core/Typography';

const routes = [
  { name: 'Work', pathname: '/work' },
  { name: 'Stuff', pathname: '/stuff' },
  { name: 'Academic', pathname: '/academic' },
  { name: 'Contact', pathname: '/contact' },
];

function AppBar(props) {
  const { location } = props;
  const classes = useStyles();
  const lang = useSelector(state => state.lang.appBar);

  const isActive = React.useCallback(href => (href === location.pathname), [location.pathname]);

  return (
    <header aria-label="#Header" className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <NavLink
            to="/"
            aria-label={lang.home}
            active={isActive('/')}
            liClassName={classes.mainLi}
          >
            <Typography variant="h6" component="span">www.danielsosa.uy</Typography>
          </NavLink>

          {routes.map(({ name, pathname }) => (
            <NavLink
              key={pathname}
              to={pathname}
              className={classes.a}
              active={isActive(pathname)}
              liClassName={classes.li}
            >
              {name}
            </NavLink >
          ))}
        </ul>
      </nav>
    </header>
  );
}

AppBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AppBar;
