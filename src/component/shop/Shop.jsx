import React, { useEffect, useState } from "react";
import Product from "../product/Product";

const Shop = () => {
	/* ------------ empty [array] cause the products.json is an array ----------- */
	const [products, setProduct] = useState([]);

	/* ------ useEffect cause the info/api is being fetched from elsewhere ------ */
	useEffect(() => {
		fetch("products.json")
			.then((result) => result.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className="grid grid-cols-5">
			<div className="col-span-4 grid grid-cols-2 md:grid-cols-3">
				{products.map((product) => (
					<Product
						key={product.id}
						// product={product}
						img={product.img}
						name={product.name}
						price={product.price}
						seller={product.seller}
						rate={product.ratings}
					></Product>
				))}
			</div>
			<div className="col-span-1">shop here</div>
		</div>
	);
};

export default Shop;
