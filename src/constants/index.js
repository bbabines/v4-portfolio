import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	mongodb,
	git,
	figma,
	meta,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	vscode,
	framermotion,
	bootstrap,
	gitHub,
	sass,
	styledcomponents,
	next,
	firebase,
	vite,
	freelance,
	chemsafe,
	ohiohealth,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI Developer",
		icon: mobile,
	},
	{
		title: "Front-End Engineer",
		icon: backend,
	},
	{
		title: "Web Developer",
		icon: web,
	},

	{
		title: "Creative Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "next.js",
		icon: next,
	},
	{
		name: "framer motion",
		icon: framermotion,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "HTML 5",
		icon: html,
	},

	{
		name: "TypeScript",
		icon: typescript,
	},
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },

	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "bootstrap",
		icon: bootstrap,
	},
	{
		name: "sass",
		icon: sass,
	},
	// {
	// 	name: "styled components",
	// 	icon: styledcomponents,
	// },
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "vscode",
		icon: vscode,
	},

	// {
	// 	name: "git",
	// 	icon: git,
	// },

	// {
	// 	name: "github",
	// 	icon: gitHub,
	// },

	// {
	// 	name: "vite",
	// 	icon: vite,
	// },
	// {
	// 	name: "firebase",
	// 	icon: firebase,
	// },
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Freelance Consultant",
		icon: freelance,
		iconBg: "#383E56",
		date: "December 2022 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
	{
		title: "Tech Lead / Business Analyst",
		company_name: "Chemical Safety Software",
		icon: chemsafe,
		iconBg: "#E6DEDD",
		date: "August 2022 - Present",
		points: [
			"Implement Chemical Safety's environmental health and safety (EH&S) software into client's business practices.",
			"Work alongside external and internal developers, project managers, and ancillary staff.",
			"Work with SQL databases, stored procedures, single sign on, and various APIs.",
		],
	},
	{
		title: "Critical Care Dietitian",
		company_name: "OhioHealth",
		icon: ohiohealth,
		iconBg: "#383E56",
		date: "January 2015 - August 2022",
		points: [
			"Helped innovate OhioHealth's first virtual nutrition support team.",
			"Cared for critically ill patients along side doctors, pharmacists, nurse practitioners, and nurses.",
			"Took part in a rotation where total parenteral nutrition (TPN) was managed virtually for six hospitals in Columbus, Ohio.",
			"Covering a MICU, SICU, and other hospital units within the OhioHealth system onsite after TPN rotation.",
		],
	},
	{
		title: "Registered Dietitian",
		company_name: "OhioHealth",
		icon: ohiohealth,
		iconBg: "#E6DEDD",
		date: "December 2013 - January 2015",
		points: [
			"Started and lead malnutrition education, training, and billing efforts within the OhioHealth system.",
			"Completed nutrition assessments, monitored nutrition care plans, and interacted with the interdisciplinary team members in care rounds.",
			"Provided medical nutrition therapy (MNT) to promote health and provide nutrition care services in the treatment of diseases on various units.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
