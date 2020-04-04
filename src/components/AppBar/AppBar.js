import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { useSelector } from 'react-redux';
// Components
import NavLink from '../NavLink/NavLink';
// Material UI
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import WorkIcon from '@material-ui/icons/WorkOutline';
import WidgetsIcon from '@material-ui/icons/WidgetsOutlined';
import SchoolIcon from '@material-ui/icons/SchoolOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';


const routes = [
  { name: 'Work', pathname: '/work', icon: WorkIcon },
  { name: 'Stuff', pathname: '/stuff', icon: WidgetsIcon },
  { name: 'Academic', pathname: '/academic', icon: SchoolIcon },
  { name: 'Contact', pathname: '/contact', icon: EmailIcon },
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
            icon={HomeIcon}
          >
            <Typography variant="h6" component="span">www.danielsosa.uy</Typography>
          </NavLink>

          {routes.map(({ name, pathname, icon }) => (
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
