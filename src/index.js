import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import getTheme from './theme';
import './index.css';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/selectors';
// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

console.groupCollapsed('App info');
console.log(process.env.APP_NAME);
console.log(process.env.APP_DESCRIPTION);
console.log(`v${process.env.APP_VERSION}`);
console.groupEnd();

ReactDOM.render(
	<Provider store={store}>
		<AppWithTheme />
	</Provider>,
	document.getElementById('app'),
);

function AppWithTheme() {
	const prefersLightMode = useMediaQuery('@media (prefers-color-scheme: light)');
	const preferedMode = prefersLightMode ? 'light' : 'dark';
	const userSelectedMode = useSelector(selectTheme);
	const initialTheme = getTheme(userSelectedMode || preferedMode);
	const [theme, setTheme] = React.useState(initialTheme);

	React.useEffect(() => {
		const selectedTheme = getTheme(userSelectedMode);
		setTheme(selectedTheme);
	}, [userSelectedMode]);

	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}
