import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';

import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import FAQ from './components/FAQ';
import Hotels from './components/Hotels';
import Landing from './components/Landing';
import NavigationHeader from './components/Navbars/NavigationHeader';
import Rules from './components/Rules';
import Sponsors from './components/Sponsors';
import Referee from './components/Referee';
import Venues from './components/Venues';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavigationHeader />
				<Switch>
					<Route path="/login" exact render={(props) => <Login {...props} />} />
					<Route path="/register" exact render={(props) => <Registration {...props} />} />
					<Route path="/" exact render={(props) => <Landing {...props} />} />
					<Route path="/about-us" exact render={(props) => <AboutUs {...props} />} />
					<Route path="/faq" exact render={(props) => <FAQ {...props} />} />
					<Route path="/hotel" exact render={(props) => <Hotels {...props} />} />
					<Route path="/rules" exact render={(props) => <Rules {...props} />} />
					<Route path="/sponsors" exact render={(props) => <Sponsors {...props} />} />
					<Route path="/referee-registration" exact render={(props) => <Referee {...props} />} />
					<Route path="/venue" exact render={(props) => <Venues {...props} />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
