import React from "react";

const Product = (props) => {
	// console.log(props.product);

	/* ------------------------------- destructure ------------------------------ */
	// const { img, name, seller, quantity, price } = props.product;
	return (
		<div className="mb-10 m-3 text-lg md:text-xl border rounded-lg relative">
			<img
				className=" rounded sm:w-96 lg:w-full w-full"
				src={props.img}
				alt=""
			/>
			<div className="p-3 font-semibold text-gray-800 mb-14">
				<p>{props.name}</p>
				<p className="mb-10 text-base">Price: ${props.price}</p>
				<p className="text-sm text-gray-600">
					Manufacturer: {props.seller}
				</p>
				<p className="text-sm text-gray-600">Rating: {props.rate}</p>
			</div>
			<button className="absolute bottom-0  text-center bg-orange-300 p-3 font-mono font-semibold cursor-pointer hover:bg-orange-400 hover:text-white w-full rounded-b-lg">
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
