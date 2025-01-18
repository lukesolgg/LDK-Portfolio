import project1 from "../assets/linkedin.png";
import project2 from "../assets/projects/project111.png";
import project3 from "../assets/projects/ldklogo.png";
import project4 from "../assets/projects/project222.png";
import project5 from "../assets/projects/project555.png";

export const HERO_CONTENT = `Hi, I'm Luke Knight, a full stack developer based in Belfast, Northern Ireland. I specialize in building web applications with React, Node.js, and other modern technologies. Welcome to my portfolio!`;

export const ABOUT_TEXT = `I am a full-stack developer with a passion for creating dynamic and visually appealing web applications. I have experience working with a variety of technologies, including React, Node.js, and MongoDB. I am always eager to learn new skills and take on new challenges. In my free time, I enjoy exploring the outdoors, playing video games, and experimenting with new recipes in the kitchen.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Admin Officer",
    company: "Department for Work & Pensions - UK",
    description: `Currently working as an Admin Officer for the Department for Work and Pensions, managing administrative tasks and ensuring efficient operations. This role has provided stability and the opportunity to raise capital. Actively seeking to return to software development, with a focus on Solana and blockchain technologies`,
    technologies: ["React", "NextJS", "NodeJS", "Redux"],
  },
  {
    year: "2022 - 2023",
    role: "Travelled & Attended Hacker House Events",
    company: "Solo",
    description: `Took a year out from 2022 to 2023 to explore and participate in Solana Hacker House events in Barcelona and London, gaining exposure to blockchain technology and Web3 development. Networked with developers and industry professionals while deepening knowledge of decentralized applications. Concluded work with Gaian Guardians during this period, marking a transition to new opportunities.`,
    technologies: ["React", "TailwindCSS", "Vue.js", "Rust"],
  },
  {
    year: "2021 - 2022",
    role: "Junior Developer",
    company: "Gaian Guardians",
    description: `Worked as a Junior Developer at Gaian Guardians, developing and enhancing web applications using TypeScript and Tailwind CSS. Collaborated with the team to create responsive and visually appealing user interfaces. Contributed to codebase optimization, debugging, and feature implementation in a fast-paced environment.`,
    technologies: ["Typescript", "TailwindCSS", "Node.js", "React.js"],
  },
  {
    year: "2020 - 2021",
    role: "Full Stack Developer Course",
    company: "CareerSwitchIT",
    description: `Completed an intensive full-stack developer course with CareerSwitchIT, mastering HTML, CSS, and JavaScript for front-end development. Built dynamic web applications using React.js and Node.js while managing databases with MongoDB. Gained experience in agile workflows and collaborating on coding projects to solve real-world problems.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Linked In Clone",
    image: project1,
    description:
      "A clone of the LinkedIn platform, featuring user authentication, profile creation, and post sharing functionality, built with React, Node.js, and Redux.",
    technologies: ["Firebase", "React", "Node.js", "Redux"],
    link: "https://linkedin-clone-e867e.firebaseapp.com/",
    githublink: "https://github.com/yourusername/linkedin-clone"
  },
  {
    title: "LDK Autocare Website",
    image: project2,
    description:
      "A modern auto detailing website built with a responsive design for desktop & mobile. Features include an interactive service booking system & detailed service catalog. Implemented EmailJS for booking services, and custom CSS animations for enhanced user experience via tailwindcss.",
    technologies: ["React", "NextJS", "TailwindCSS", "Yarn"],
    link: "https://ldk-autocare-web.vercel.app/",
    githublink: "https://github.com/yourusername/linkedin-clone"
  },
  {
    title: "My Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Node.js", "TailwindCSS", "Vite"],
    link: "https://react-portfolio-2024-eight.vercel.app/",
    githublink: "https://github.com/yourusername/linkedin-clone"
  },
  {
    title: "Web3 Landing Page UI",
    image: project4,
    description:
      "A futuristic AI-themed landing page showcasing rapid development with Next.js and Tailwind CSS, featuring responsive design, dynamic interaction, and social media integration",
    technologies: ["Typescript", "TailwindCSS", "NextJS", "Vercel"],
    link: "https://upcoming-project-ui.vercel.app/",
    githublink: "https://github.com/yourusername/linkedin-clone"
  },
  {
    title: "Solana Wallet Tracker Mobile App",
    image: project5,
    description:
      "A mobile application designed to track and manage Solana blockchain wallets. Features real-time balance updates, transaction history, and token management. Built with React Native for cross-platform compatibility, leveraging the Solana Web3.js library for blockchain interactions. Includes push notifications for transaction alerts and a user-friendly interface for ease of use.",
    technologies: ["React Native", "Solana Web3.js", "Expo", "Redux"],
    link: "https://your-app-link.com", // Replace with the actual link
    githublink: "https://github.com/yourusername/solana-wallet-tracker", // Replace with the actual GitHub link
  },
  {
    title: "Solana Balance Tracker",
    image: project5, // Replace with the actual image import for this project
    description:
      "A straightforward web application designed to check the balance of any Solana wallet address. Users can input a wallet address to instantly view the current SOL balance along with any associated token balances. This project focuses on simplicity and speed, providing a clean UI with minimalistic design elements. Utilizes the Solana Web3.js library to interact with the Solana blockchain and fetch wallet data.",
    technologies: ["React", "Solana Web3.js", "TailwindCSS"],
    link: "https://your-solana-balance-tracker-link.com", // Replace with the actual link
    githublink: "https://github.com/yourusername/solana-balance-tracker" // Replace with the actual GitHub link
  },
];

export const CONTACT = {
  address: "Belfast, Northern Ireland, UK",
  phoneNo: "+44 77520 38819",
  email: "lukeknightdev@gmail.com",
};
