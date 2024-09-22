import {
  // FaXTwitter,
  FaGithub,
  FaLinkedin,
  // FaLeetcode,
  // FaFacebook,
  // FaDiscord,
  FaInstagram,
  // FaCode,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { RiReactjsLine } from "react-icons/ri";
import { FaEnvelope, FaCode } from "react-icons/fa";
import {
  SiMysql,
  SiJavascript,
  // SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "RAGHAV AGIWAL",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full-stack developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information. Features responsive design and smooth navigation for an optimized user experience.",
    image: projectImage1,
    githubLink: "https://github.com/raghav0807/Personal-Portfolio",
  },
  {
    id: 2,
    name: "Hotel Management System",
    description:
      "A full-stack hotel management website built using React, Node.js, and MySQL, featuring secure JWT-based user authentication. Users can apply multiple filters to book hotels based on preferences and integrated a complaint system for resolving issues.",
    image: projectImage2,
    githubLink: "https://github.com/raghav0807/Hotel-Management-Website",
  },
  {
    id: 3,
    name: "To-Do App",
    description:
      "A user-friendly task management application developed with React for managing daily tasks. Users can easily add, edit, delete, and mark tasks as complete, ensuring a smooth and productive workflow.",
    image: projectImage3,
    githubLink: "https://github.com/raghav0807/To-Do-App",
  },
  {
    id: 4,
    name: "Rainfall Data Analysis & Visualization",
    description:
      "Designed rainfall data trends using advanced statistical methods and visualisations, allowing stakeholders to interact with historical rainfall data, thereby improving accessibility and understanding of trends.",
    image: projectImage4,
    githubLink:
      "https://github.com/raghav0807/Rainfall-Data-Analysis-Visualization-",
  },
  {
    id: 5,
    name: "Chat Application",
    description:
      "Developed a real-time full-stack web chat application with React and node.js, integrating features implemented through multiple APIs. Enhanced user engagement and interactivity with secure authentication and customizable chat rooms.",
    image: projectImage5,
    githubLink: "https://github.com/raghav0807/Hotel-Management-Website",
  },
  {
    id: 6,
    name: "Tic-Tac-Toe Game",
    description:
      "An interactive and classic Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The application provides an engaging and fun user experience with a clean design and responsive gameplay.",
    image: projectImage6,
    githubLink: "https://github.com/raghav0807/Tic-Tac-Toe",
  },
];

export const BIO = [
  "Raghav Agiwal is a passionate and driven Computer Science and Engineering student at Indian Institute of Information Technology Vadodara, with a strong focus on full-stack web development and data analytics. His expertise spans across modern web technologies such as React, Node.js, JavaScript, Tailwind CSS, MongoDB and MySQL which he uses to create full stack website with intuitive and engaging user interfaces.",
  "In 2024,During his internship at Localitaz Geofencing Innovations, Delhi, Raghav worked on the frontend of a dynamic footwear e-commerce website. He built interactive, user-friendly interfaces using Tailwind CSS, React, and JavaScript, and supported backend integration with JWT for secure authentication.",
  "Raghav’s diverse skill set extends beyond web development, with a solid foundation in data analysis and visualization, enabling him to extract valuable insights from large datasets. He is committed to crafting efficient, scalable, and impactful solutions in all his projects, setting him apart as a versatile and innovative developer.",
  "Additionally, Raghav is a dedicated problem solver who has engaged with a multitude of challenges on platforms like LeetCode, honing his analytical thinking and coding skills. This consistent practice not only enhances his algorithmic proficiency but also equips him with the resilience and adaptability needed to tackle complex software development problems.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
  {
    icon: <FaJava className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Java",
    experience: "3+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Developer Intern",
    company: "Localitaz Geofencing Innovations Private Limited",
    duration: "January 2024 - July 2024",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of the Koburg footwear e-commerce website, leveraging cutting-edge technologies like React, Tailwind CSS, and JavaScript. I worked closely with cross-functional teams, including designers and backend developers, to deliver a seamless and high-performance user experience. I created a responsive user interface that allows users to filter products by choice and category, with dynamic updates based on trends.",
  },
  {
    title: "Project Lead",
    company: "Hotel Management System",
    duration: "October 2022 - March 2023",
    description:
      "As a Full Stack Developer, I focused on building a highly responsive and user-friendly Hotel Management System using React, Tailwind CSS and Javascript for the frontend and Node.js, MySQL and MongoDB for the backend. I implemented features such as real-time booking management, user registration, and authentication with secure JWT tokens, ensuring robust security for user logins. The system also included a complaint submission feature to enhance user interaction and support. Through a solid backend architecture with MySQL, I improved data management efficiency by 30%, resulting in a seamless experience for users.",
  },

  {
    title: "Apprentice",
    company: "ChatSphere",
    duration: "August 2023 - December 2023",
    description:
      "Developed a full-stack web chat application using React and Node.js, designed to enhance user interactivity and engagement. This all-in-one platform allows users to ask questions, generate chat summaries, listen to songs based on their mood, and check weather conditions, among other features. By integrating multiple APIs, I created a seamless experience that fosters user interaction and satisfaction. The application significantly boosted engagement metrics and established a robust framework for future enhancements.",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Vadodara",
    duration: "December 2021 - May 2025",
    description:
      "Currently pursuing a B.Tech with a specialization in software development and data analysis. Actively engaged in various clubs and activities, including serving as the General Secretary of the Carrom Club at college and participating in the Photography Club and Sports Club. I proudly represented my institute in cricket at the inter-IIIT sports event. Committed to enhancing my practical skills through diverse projects in web development and data visualization, I strive to bridge the gap between theoretical knowledge and real-world applications.",
  },
  {
    degree: "Class 12th",
    institution: "RBSE Board",
    duration: "2019 - 2020",
    description:
      "Secured 85%, with a focus on science and mathematics, building a solid foundation for higher studies in computer science.",
  },
  {
    degree: "Class 10th",
    institution: "RBSE Board",
    duration: "2017 - 2018",
    description:
      "Achieved a score of 96.17%, showcasing strong academic performance in key subjects.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/raghav_agiwal_08/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/raghav0807",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/raghavagiwal/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/raghavagiwal20", // your LeetCode link
    icon: <FaCode fontSize={25} className="hover:opacity-80" />, // make sure you have a LeetCode icon installed
  },

  {
    href: "mailto:raghavagiwal20@gmail.com",
    icon: <FaEnvelope fontSize={25} className="hover:opacity-80" />,
  },
];
