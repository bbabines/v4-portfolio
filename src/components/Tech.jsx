import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
	return (
		<div>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>
					The technologies I work with
				</p>
				<h2 className={`${styles.sectionHeadText} mb-20`}>Tools.</h2>
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, "");
