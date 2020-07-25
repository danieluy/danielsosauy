import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles } from '@material-ui/core';

const themeColorTag = document.querySelector('meta[name="theme-color"]');

export default makeStyles((theme: Theme) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('theme', theme);
  }
  if (themeColorTag) {
    themeColorTag.setAttribute('content', '#FFF');
  }
  return createStyles({});
});
