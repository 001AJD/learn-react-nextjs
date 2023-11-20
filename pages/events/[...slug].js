import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function FilteredEventsPage() {
	const router = useRouter();
	const [eventsData, setEventsData] = useState([]);

	const filterData = router.query.slug;
	console.log(filterData);

	const { data, error } = useSWR(
		"https://react-getting-started-ec5ec-default-rtdb.asia-southeast1.firebasedatabase.app/events.json",
		fetcher
	);

	useEffect(() => {
		console.log(data);
		if (data) {
			const events = [];

			for (const key in data) {
				events.push({
					id: key,
					...data[key],
				});
			}
			console.log(events);
			setEventsData(events);
		}
	}, [data]);

	let pageHeadData = (
		<Head>
			<title>List of Filtered Events</title>
			<meta name="description" content="A list of filtered Events" />
		</Head>
	);

	if (eventsData.length === 0) {
		return (
			<Fragment>
				{pageHeadData}
				<p className="center">Loading...</p>
			</Fragment>
		);
	}

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	pageHeadData = (
		<Head>
			<title>List of Filtered Events</title>
			<meta
				name="description"
				content={`All events for ${numYear}/${numMonth}`}
			/>
		</Head>
	);

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12 ||
		error
	) {
		return (
			<Fragment>
				{pageHeadData}
				<ErrorAlert>
					Invalid filter. Please Adjust your values!
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}
	const filteredEvents = eventsData.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === numYear &&
			eventDate.getMonth() === numMonth - 1
		);
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				{pageHeadData}
				<ErrorAlert>No Events found for the chosen filter!</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	if (filteredEvents.length > 0) {
		const date = new Date(numYear, numMonth - 1);
		return (
			<Fragment>
				{pageHeadData}
				<ResultsTitle date={date} />
				<EventList items={filteredEvents} />
			</Fragment>
		);
	}
}

export default FilteredEventsPage;
