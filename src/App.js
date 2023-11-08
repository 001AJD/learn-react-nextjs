import React from "react";
import Todo from "./components/Todo";

function App() {
	return (
		<div>
			<h1>My Todos</h1>
			<Todo text="Learn react" />
			<Todo text="Create website" />
			<Todo text="take tuffy for walk" />
		</div>
	);
}

export default App;
