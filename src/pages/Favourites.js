import React from "react";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
	const favouriteCtx = useContext(FavouritesContext);

	let content;

	if (favouriteCtx.favourites.length === 0) {
		content = <p>You have no favourites yet. Start adding some?</p>;
	} else {
		content = <MeetupList meetups={favouriteCtx.favourites} />;
	}

	return (
		<section>
			<h1>My Favourites</h1>
			{content}
		</section>
	);
}

export default Favourites;
