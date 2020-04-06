import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useStyles from './styles';
import Loadable from 'react-loadable';
// Components
import TopAppBar from './AppBar/TopAppBar';
import DownAppBar from './AppBar/DownAppBar';
import Loading from './Loading/Loading';

function App(props) {
	// Necessary to update app theme color
	useStyles();

	// Loadable views
	const Home = getLoadable('./Home/Home');
	const Work = getLoadable('./Work/Work');
	const Stuff = getLoadable('./Stuff/Stuff');
	const Academic = getLoadable('./Academic/Academic');
	const Contact = getLoadable('./Contact/Contact');

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

function getLoadable(path) {
	return Loadable({
		loader: () => import(`./${path.slice(2)}`),
		loading: Loading,
	});
}

function getBaseName() {
	if (window.location.hostname === 'danieluy.github.io') {
		return 'www.danielsosa.uy-v3';
	}
	return '';
}
