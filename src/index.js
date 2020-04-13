import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './index.css';	

console.groupCollapsed('App info');
console.log(process.env.APP_NAME);
console.log(process.env.APP_DESCRIPTION);
console.log(`v${process.env.APP_VERSION}`);
console.groupEnd();

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById('app'),
);