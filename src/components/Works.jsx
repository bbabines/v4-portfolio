import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

import { projects } from "../constants";
import { github, demo } from "../assets";

const ProjectCard = ({
	name,
	index,
	tags,
	description,
	image,
	source_code_link,
	live_demo_link,
}) => {
	return (
		<div

		// Variants currently breaking mobile view from rendering so motion div removed.

		// variants={fadeIn("up", "spring", index * 0.5, 0.75)}
		>
			<Tilt
				options={{ max: 20, scale: 1, speed: 250 }}
				className="bg-primary p-5 rounded-2xl sm:w-[320px]  w-full"
			>
				<div className="relative h-[230px] w-full">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end mt-3 card-img_hover ">
						<div
							onClick={() => window.open(live_demo_link, "blank")}
							className="mr-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-green-300 hover:border-purple-400"
						>
							<img src={demo} alt="demo" className=" h-[65%] object-contain" />
						</div>

						<div
							onClick={() => window.open(source_code_link, "blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-green-300 hover:border-[#faac18]"
						>
							<img
								src={github}
								alt="github"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5 ">
					<h3
						className="text-white font-bold text-[24px] cursor-pointer hover:text-[#faac18]"
						onClick={() => window.open(live_demo_link, "blank")}
					>
						{name}
					</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div
			// variants={textVariant()}
			>
				<p className={`${styles.sectionSubText}`}>My work</p>
				<h2 className={`${styles.sectionHeadText} `}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					// Variant breaking mobile view.

					// variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					The following projects showcase my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project.${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "work");
