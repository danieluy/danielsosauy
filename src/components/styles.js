import makeStyles from '@material-ui/core/styles/makeStyles';

const themeColorTag = document.querySelector('meta[name="theme-color"]');

export default makeStyles(theme => {
  console.log('theme', theme);
  themeColorTag.setAttribute('content', theme.browserNavBar);
  document.body.style.backgroundColor = theme.elevationColor[0];
  return {};
});
