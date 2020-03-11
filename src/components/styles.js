import makeStyles from '@material-ui/core/styles/makeStyles';

const themeColorTag = document.querySelector('meta[name="theme-color"]');

export default makeStyles(theme => {
  console.log('theme', theme);
  setThemeColor(theme.palette.primary.main);
  return {};
});

function setThemeColor(color) {
  themeColorTag.setAttribute('content', color);
} 
