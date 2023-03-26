import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
	return (
		<div className="bg-slate-800 text-white text-2xl p-3">
			<div className="px-28  flex justify-between">
				<img src={logo} />
				<div className="">
					<a
						className="pr-6 hover:underline hover:text-blue-400"
						href="/shop">
						Shop
					</a>
					<a
						className="pr-6 hover:underline hover:text-blue-400"
						href="/order">
						Order
					</a>
					<a
						className="pr-6 hover:underline hover:text-blue-400"
						href="/inventory">
						Inventory
					</a>
					<a
						className="pr-6 hover:underline hover:text-blue-400"
						href="/login">
						Log In
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
