import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';
import General from './General';

const App = () => (
	<Router>
		<Navbar />
		<Switch>
			<Route exact path="/" component={General} />
			<Route exact path="/business" component={Business} />
			<Route exact path="/entertainment" component={Entertainment} />
			<Route exact path="/health" component={Health} />
			<Route exact path="/science" component={Science} />
			<Route exact path="/sports" component={Sports} />
			<Route exact path="/technology" component={Technology} />
		</Switch>
	</Router>
);

export default App;
