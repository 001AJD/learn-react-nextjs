import React from "react";
import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
	const favouritesCtx = useContext(FavouritesContext);

	const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

	function toggleFavouriteStatusHandler() {
		if (itemIsFavourite) {
			favouritesCtx.removeFavourite(props.id);
		} else {
			favouritesCtx.addFavourite({
				id: props.id,
				title: props.titile,
				description: props.description,
				image: props.image,
				address: props.address,
			});
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>

				<div className={classes.content}>
					<h3>{props.titile}</h3>
					<address>{props.address}</address>
					<p>{props.Description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavouriteStatusHandler}>
						{itemIsFavourite
							? "Remove from Favourite"
							: "Add to Favourite"}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
