import makeStyles from '@material-ui/core/styles/makeStyles';

const themeColorTag = document.querySelector('meta[name="theme-color"]');

export default makeStyles(theme => {
  if (process.env.NODE_ENV === 'development') {
    console.log('theme', theme);
  }
  themeColorTag.setAttribute('content', theme.browserNavBar);
  return {};
});
