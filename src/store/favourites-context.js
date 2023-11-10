import React from "react";
import { createContext, useState } from "react";

const FavouritesContext = createContext({
	favourites: [],
	totalFavourites: 0,
	addFavourite: (favouriteMeetup) => {},
	removeFavourite: (meetupId) => {},
	itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
	const [userFavourites, setUserFavourites] = useState([]);

	function addFavouriteHandler(favouriteMeetup) {
		setUserFavourites((previousUserFavourite) => {
			return previousUserFavourite.concat(favouriteMeetup);
		});
	}

	function removeFavouriteHandler(meetupId) {
		setUserFavourites((previousUserFavourite) => {
			return previousUserFavourite.filter((meetup) => {
				return meetup.id !== meetupId;
			});
		});
	}

	function itemIsFavouriteHandler(meetupId) {
		return userFavourites.some((meetup) => {
			return meetup.id === meetupId;
		});
	}

	const context = {
		favourites: userFavourites,
		totalFavourites: userFavourites.length,
		addFavourite: addFavouriteHandler,
		removeFavourite: removeFavouriteHandler,
		itemIsFavourite: itemIsFavouriteHandler,
	};

	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	);
}

export default FavouritesContext;
