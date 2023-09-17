import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import DeskScene from "./canvas/DeskScene";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5 `}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#faac18]" />
					<div className="w-1 sm:h-80 h-40 gold-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#faac18]">Brad</span>
					</h1>
					<p className={`${styles.heroSubText}  text-white-100`}>
						I build user interfaces, web applications, and websites with React.
						and Three.js.
					</p>
				</div>
			</div>
			<ComputersCanvas />
			{/* <DeskScene /> */}
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center xl:hidden">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify center center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						></motion.div>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
