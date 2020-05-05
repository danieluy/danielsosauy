import WorkIcon from '@material-ui/icons/WorkOutline';
import WidgetsIcon from '@material-ui/icons/WidgetsOutlined';
import SchoolIcon from '@material-ui/icons/SchoolOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';

const getRoutes = lang => [
  // { name: lang.work, pathname: '/work', icon: WorkIcon },
  { name: lang.stuff, pathname: '/stuff', icon: WidgetsIcon },
  { name: lang.academic, pathname: '/academic', icon: SchoolIcon },
  // { name: lang.contact, pathname: '/contact', icon: EmailIcon },
];

export default getRoutes;
