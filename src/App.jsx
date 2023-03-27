import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Product from "./component/product/Product";
import Shop from "./component/shop/Shop";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="mb-4 font-serif overflow-hidden">
			<Header></Header>
			<Shop></Shop>
			<Product></Product>
		</div>
	);
}

export default App;
