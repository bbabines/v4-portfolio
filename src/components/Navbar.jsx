import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-12 h-12 object-contain rounded-[30px]"
					/>
					<p className="text-white text-[18px] font-bolt cursor-pointer">
						Brad Babines
						<span className="sm:block hidden">
							| React & Three.js Developer
						</span>
					</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
