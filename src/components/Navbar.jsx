import React, { useState } from "react";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="relative flex items-center justify-between py-6 px-4 lg:px-[4rem] top-0 left-0 w-full z-50 bg-transparent shadow-lg">
			<div></div>
			<div className="md:flex hidden items-center justify-center gap-8 text-black lg:ml-[10vh] md:text-[14px] lg:text-[18px]">
				<a href="">Home</a>
				<a href="">Features</a>
				<a href="">Portfolio</a>
				<a href="">About Us</a>
				<a href="">Contact Us</a>
			</div>

			<div className="hidden md:block">
				<form action="" className="relative flex flex-row gap-1">
					<input
						className="border-b bg-transparent text-white focus:outline-none placeholder-white"
						type="text"
						placeholder="Search..."
					/>
					<FaSearch className="text-white mt-1" />
				</form>
			</div>

			<div className="md:hidden w-full flex flex-row justify-between items-center">
				<button onClick={toggleMenu} className="text-black">
					{isOpen ? (
						<FaTimes className="w-4 h-6" />
					) : (
						<FaBars className="w-4 h-6" />
					)}
				</button>
				<form action="" className="relative flex flex-row gap-1">
					<input
						className="border-b border-black bg-transparent text-black focus:outline-none placeholder-black"
						type="text"
						placeholder="Search..."
					/>
					<FaSearch className="text-black mt-1" />
				</form>
			</div>

			<div
				className={`${
					isOpen ? "block" : "hidden"
				} md:hidden absolute h-screen top-0 left-0 w-1/3 pt-16 pb-8 text-start pl-4 -z-20 bg-white shadow-lg`}
			>
				<a className="block py-2 my-2">
					<h1 className="text-[14px] font-bold tracking-widest text-black">
						Home
					</h1>
				</a>
				<a className="block py-2 my-2">
					<h1 className="text-[14px] font-bold tracking-widest text-black">
						Features
					</h1>
				</a>
				<a className="block py-2 my-2">
					<h1 className="text-[14px] font-bold tracking-widest text-black">
						Portfolio
					</h1>
				</a>
				<a className="block py-2 my-2">
					<h1 className="text-[14px] font-bold tracking-widest text-black">
						About us
					</h1>
				</a>
				<a className="block py-2 my-2">
					<h1 className="text-[14px] font-bold tracking-widest text-black">
						Contact us
					</h1>
				</a>
				{/* <div className=" mt-4 py-4 border-0 rounded-xl">
					<form action="">
						<input
							className="border-b bg-transparent text-black focus:outline-none"
							type="text"
							placeholder="Search..."
						/>
					</form>
				</div> */}
			</div>
		</nav>
	);
};

export default Navbar;
