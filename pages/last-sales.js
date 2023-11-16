import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LastSalesPage(props) {
	const [sales, setSales] = useState(props.sales);
	const [isLoading, setIsLoading] = useState(false);

	const { data, error } = useSWR(
		"https://react-getting-started-ec5ec-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json",
		fetcher
	);

	useEffect(() => {
		if (data) {
			const transformedData = [];
			for (const key in data) {
				transformedData.push({
					id: key,
					userName: data[key].userName,
					volume: data[key].volume,
				});
			}
			console.log(transformedData);

			setSales(transformedData);
			setIsLoading(false);
		}
	}, [data]);

	if (!sales && !data) {
		return (
			<div>
				<p>No Data yet</p>
			</div>
		);
	}

	return (
		<div>
			<ul>
				{sales.map((sale) => (
					<li key={sale.id}>
						{sale.userName} - ₹{sale.volume}
					</li>
				))}
			</ul>
		</div>
	);
}

export async function getStaticProps() {
	const response = await fetch(
		"https://react-getting-started-ec5ec-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
	);
	const data = await response.json();
	const transformedData = [];
	for (const key in data) {
		transformedData.push({
			id: key,
			userName: data[key].userName,
			volume: data[key].volume,
		});
	}
	console.log(transformedData);
	return {
		props: { sales: transformedData },
		revalidate: 10,
	};
}

export default LastSalesPage;
