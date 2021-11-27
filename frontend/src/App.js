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
import Fixtures from './components/Fixtures';
import Venues from './components/Venues';
import PointTable from './components/PointTable';
import TournamentDirectorHome from './components/TournamentDirectorHome';
import FAQCreation from './components/FAQCreation';
import TeamDirectorHome from './components/TeamDirectorHome';
import TournamentDirectorLogin from './components/Authentication/TournamentDirectorLogin';
import TeamDirectorLogin from './components/Authentication/TeamDirectorLogin';
import VolunteerDirectorLogin from './components/Authentication/VolunteerDirectorLogin';
import RefereeDirectorLogin from './components/Authentication/RefereeDirectorLogin';
import RefereeDirectorHome from './components/RefereeDirectorHome';
import VolunteerDirectorHome from './components/VolunteerDirectorHome';
import SponsorCreation from './components/SponsorCreation';
import ManageHotel from './components/ManageHotel';
import ManageReferee from './components/ManageReferee';

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
					<Route path="/fixtures" exact render={(props) => <Fixtures {...props} />} />
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
					<Route path="/point-table" exact render={(props) => <PointTable {...props} />} />
					<Route
						path="/tournament-director/home"
						exact
						render={(props) => <TournamentDirectorHome {...props} />}
					/>
					<Route
						path="/tournament-director/login"
						exact
						render={(props) => <TournamentDirectorLogin {...props} />}
					/>
					<Route
						path="/tournament-director/faq-creation"
						exact
						render={(props) => <FAQCreation {...props} />}
					/>
					<Route
						path="/tournament-director/manage-hotel"
						exact
						render={(props) => <ManageHotel {...props} />}
					/>
					<Route
						path="/tournament-director/sponsor-creation"
						exact
						render={(props) => <SponsorCreation {...props} />}
					/>
					<Route path="/referee-director/home" exact render={(props) => <RefereeDirectorHome {...props} />} />
					<Route
						path="/volunteer-director/home"
						exact
						render={(props) => <VolunteerDirectorHome {...props} />}
					/>
					<Route path="/team-director/login" exact render={(props) => <TeamDirectorLogin {...props} />} />
					<Route path="/team-director/home" exact render={(props) => <TeamDirectorHome {...props} />} />
					<Route
						path="/volunteer-director/login"
						exact
						render={(props) => <VolunteerDirectorLogin {...props} />}
					/>
					<Route
						path="/referee-director/login"
						exact
						render={(props) => <RefereeDirectorLogin {...props} />}
					/>
					<Route
						path="/referee-director/manage-schedules"
						exact
						render={(props) => <ManageReferee {...props} />}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
