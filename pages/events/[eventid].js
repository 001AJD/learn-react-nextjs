import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import { getEventById, getFeaturedEvents } from "../../helper/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventPage(props) {
	const event = props.selectedEvent;
	if (!event) {
		return (
			<div classname="center">
				<p>Loading...</p>
			</div>
		);
	}
	return (
		<Fragment>
			<Head>
				<title>{event.title}</title>
				<meta
					name="description"
					content="Find all list of all events on this page"
				/>
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>{event.description}</EventContent>
		</Fragment>
	);
}

export default EventPage;

export async function getStaticProps(context) {
	const eventId = context.params.eventid;
	const event = await getEventById(eventId);
	return {
		props: {
			selectedEvent: event,
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	const allEvents = await getFeaturedEvents();
	const paths = allEvents.map((event) => ({ params: { eventid: event.id } }));
	return {
		paths: paths,
		fallback: "blocking",
	};
}
