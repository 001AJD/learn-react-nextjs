import { useRouter } from "next/router";

function ClientsProjectsPage() {
	const router = useRouter();
	console.log(router.query);

	function loadProjectHandler() {
		router.push({
			pathname: "clients/[id]/[clientProjectId]",
			query: { id: "1", clientProjectId: "apple" },
		});
	}

	return (
		<div>
			<h1>The projects for given client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}

export default ClientsProjectsPage;
