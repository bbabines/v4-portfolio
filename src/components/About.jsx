import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 1)}
				className="w-full bg-[#faac18] p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt="icon" className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] text-center font-bold">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Introduction</p>
				<h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				<>
					I'm a skilled software developer with experience in{" "}
					<span className="text-[#5ed3f3]">React</span> and{" "}
					<span className="text-white">Three.js</span> who enjoys building
					websites, applications, and immersive experiences. I'm a quick learner
					therefore I thoroughly enjoy experimenting with different frameworks
					and libraries to fit my client's needs. I collaborate closely with
					peers and clients alike to create efficient, scalable, and
					user-friendly solutions that solve real-world problems.
				</>
				<br />
				<br />
				<>Let's work together to bring your ideas to life!</>
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10 max-xl:justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
