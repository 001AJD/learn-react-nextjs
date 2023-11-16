function UserProfilePage(props) {
	return (
		<div>
			<h1>{props.username}</h1>
		</div>
	);
}

export default UserProfilePage;

// Execute on the server after the deployment on every request

export async function getServerSideProps(props) {
	const { params, req, res } = props;
	return {
		props: {
			username: "Ajinkya",
		},
	};
}
