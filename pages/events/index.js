import { getAllEvents } from "../../helper/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function EventsPage(props) {
	const router = useRouter();
	const events = props.allEvents;

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	}
	return (
		<Fragment>
			<Head>
				<title>NextJS All Events Page</title>
				<meta
					name="description"
					content="Find all list of all events on this page"
				/>
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</Fragment>
	);
}

export default EventsPage;

export async function getStaticProps() {
	const allEvents = await getAllEvents();
	return {
		props: { allEvents: allEvents },
		revalidate: 60,
	};
}
