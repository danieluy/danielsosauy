import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import * as App from './components/App';
import store from './redux/store';
import getTheme from './theme';
import './index.css';
import { selectTheme } from './redux/selectors';
import { setAppTheme } from './redux/actions';
// Material UI
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

console.groupCollapsed('App info');
console.log(process.env.APP_NAME);
console.log(process.env.APP_DESCRIPTION);
console.log(`v${process.env.APP_VERSION} (${process.env.NODE_ENV})`);
console.groupEnd();

ReactDOM.render(
	// <Provider store={store}>
	// 	<AppWithTheme />
	// </Provider>,
	<h1>Lalala</h1>,
	document.getElementById('app'),
);

// function AppWithTheme() {
// 	const [theme, setTheme] = React.useState();
// 	const dispatch = useDispatch();
// 	const prefersLightMode = useMediaQuery('@media (prefers-color-scheme: light)');
// 	const preferedMode = prefersLightMode ? 'light' : 'dark';
// 	const userSelectedMode = useSelector(selectTheme);

// 	React.useEffect(() => {
// 		const themeMode = userSelectedMode || preferedMode;
// 		const selectedTheme = getTheme(themeMode);
// 		dispatch(setAppTheme(themeMode));
// 		setTheme(selectedTheme);
// 	}, [userSelectedMode, preferedMode]);

// 	if (theme) {
// 		return (
// 			<MuiThemeProvider theme={theme}>
// 				<App />
// 			</MuiThemeProvider>
// 		);
// 	}
// 	return null;
// }
