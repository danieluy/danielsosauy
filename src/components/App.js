import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useStyles from './styles';
import Loadable from 'react-loadable';
// Components
import Loading from './Loading/Loading';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';
import MainNav from './MainNav/MainNav';

function App(props) {
	// Necessary to update app theme color
	useStyles();

	// Loadable Views
	const Home = getLoadable('./Views/Home/Home');

	const [baseName] = React.useState(getBaseName());

	return (
		<Router basename={baseName}>
			<Header>
				<MainNav />
			</Header>
			<Main>
				<Route exact path="/" component={Home} />
				{/* <Route exact path="/stuff" component={Stuff} /> */}
				{/* <Route exact path="/academic" component={Academic} /> */}
			</Main>
			<Footer />
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
		return 'danielsosauy';
	}
	return '';
}
