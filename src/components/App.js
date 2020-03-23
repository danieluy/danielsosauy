import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useStyles from './styles';
// Components
import AppBar from './AppBar/AppBar';
// Views
import Home from './Home/Home';
import Work from './Work/Work';
import Stuff from './Stuff/Stuff';
import Academic from './Academic/Academic';
import Contact from './Contact/Contact';

function App(props) {
	// Necessary to update app theme color
	const classes = useStyles();
	const baseName = location.hostname === 'localhost'
		? ''
		: 'www.danielsosa.uy-v3';
	return (
		<Router basename={baseName}>
			<Route component={AppBar}/>
			<Route exact path="/" component={Home} />
			<Route exact path="/work" component={Work} />
			<Route exact path="/stuff" component={Stuff} />
			<Route exact path="/academic" component={Academic} />
			<Route exact path="/contact" component={Contact} />
		</Router>
	);
}

export default App;

App.propTypes = {};
