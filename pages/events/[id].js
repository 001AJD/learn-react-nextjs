import React from "react";
import { useRouter } from "next/router";

function EventPage() {
	const router = useRouter();
	const eventId = router.query.id;
	return (
		<div>
			<h1>Event Page for {eventId}</h1>
		</div>
	);
}

export default EventPage;
