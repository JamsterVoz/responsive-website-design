import React from 'react'
import foto from '../assets/Rocket.png'
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";

const Hero = () => {
  return (
		<div className="relative min-h-screen flex flex-col lg:flex-row py-20 px-8 mt-0 items-center justify-center bg-transparent gap-6 lg:gap-14">
			<img src={foto} alt="" className="w-full max-w-xs lg:max-w-lg" />

			<div className="lg:flex lg:flex-col max-w-md items-center gap-4 lg:gap-8">
				<div className="text-center lg:text-start">
					<h1 className="text-[28px] lg:text-7xl font-bold text-orange-800 tracking-wide">
						Responsive Website Design
					</h1>
					<p className="my-4 text-[16px] text-black">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
						enim hic quam molestiae aspernatur quas dolorum illum, doloribus,
						cumque itaque deserunt accusantium veritatis vitae laborum ea,
						tempora possimus ipsum assumenda.
					</p>
					<div className="flex border-2 border-white py-2 px-4 mb-4 w-full justify-between items-center">
						<input
							type="text"
							placeholder="What do you need?"
							className="bg-transparent text-white outline-none w-full placeholder-white"
						/>
						<button>
							<FaArrowAltCircleRight className="text-white text-2xl ml-4" />
						</button>
					</div>
					<button className="flex items-center border bg-black border-black mx-auto lg:mx-0 py-4 px-8 rounded-[42px]">
						<h1 className="text-white text-[18px]">Browse By Category</h1>
						<FaArrowAltCircleRight className="text-white text-2xl ml-4" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero