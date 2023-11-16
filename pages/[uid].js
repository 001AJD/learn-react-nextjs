function UserIdPage(props) {
	return (
		<div>
			<h2>{props.id}</h2>
		</div>
	);
}

export default UserIdPage;

export async function getServerSideProps(context) {
	const { params } = context;
	const userId = params.uid;

	return {
		props: {
			id: "user-" + userId,
		},
	};
}
