import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">Go to Home</span>
			</Link> */}
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn-success">Add a New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
