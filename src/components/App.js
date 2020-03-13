import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useStyles from './styles';
// Components
import AppBar from './AppBar/AppBar';
// Views
import Home from './Home/Home';

function App(props) {
	// Necessary to update app theme color
	const classes = useStyles();
	const baseName = location.hostname === 'localhost'
		? ''
		: 'www.danielsosa.uy-v3';
	return (
		<Router basename={baseName}>
			<AppBar />
			<Route exact path="/" component={Home} />
		</Router>
	);
}

export default App;

App.propTypes = {};
