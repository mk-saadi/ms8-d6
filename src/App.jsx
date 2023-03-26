import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="mb-4 font-serif overflow-hidden">
			<Header></Header>
		</div>
	);
}

export default App;
