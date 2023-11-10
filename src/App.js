import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeetups />
				</Route>

				<Route path="/favourites" exact>
					<Favourites />
				</Route>

				<Route path="/newmeetup" exact>
					<NewMeetups />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
