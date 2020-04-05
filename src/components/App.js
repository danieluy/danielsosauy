import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useStyles from './styles';
// Components
import TopAppBar from './AppBar/TopAppBar';
import DownAppBar from './AppBar/DownAppBar';
// Views
import Home from './Home/Home';
import Work from './Work/Work';
import Stuff from './Stuff/Stuff';
import Academic from './Academic/Academic';
import Contact from './Contact/Contact';

function App(props) {
	// Necessary to update app theme color
	const classes = useStyles();
	const [baseName] = React.useState(getBaseName());

	return (
		<Router basename={baseName}>
			<Route component={TopAppBar} />
			<Route exact path="/" component={Home} />
			<Route exact path="/work" component={Work} />
			<Route exact path="/stuff" component={Stuff} />
			<Route exact path="/academic" component={Academic} />
			<Route exact path="/contact" component={Contact} />
			<Route component={DownAppBar} />
		</Router>
	);
}

export default App;

App.propTypes = {};

function getBaseName(hostname) {
	if (hostname === 'danieluy.github.io') {
		return 'www.danielsosa.uy-v3';
	}
	return '';
}
