import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useStyles from './styles';
// Views
import Home from './Home/Home';

function App(props) {
	// Necessary to update app theme color
	const classes = useStyles();

	return (
		<Router>
			<Route exact path="/" component={Home} />
		</Router>
	);
}

export default App;

App.propTypes = {};
