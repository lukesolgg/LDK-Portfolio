import project1 from "../assets/projects/project111.png";
import project2 from "../assets/projects/project222.png";
import project3 from "../assets/projects/project555.png";

export const HERO_CONTENT = `Full Stack Developer based in Belfast, Northern Ireland. I build modern web applications with React, Next.js, and TypeScript — from client business sites to blockchain-powered tools.`;

export const ABOUT_TEXT = `I'm a full-stack developer who thrives on turning ideas into polished, performant web applications. My toolkit spans the React/Next.js ecosystem, TypeScript, Node.js, and Tailwind CSS, with a strong interest in Solana blockchain development. I've built everything from client business websites and finance trackers to decentralised swap apps and mobile wallet trackers. When I'm not coding, you'll find me exploring the outdoors, gaming, or experimenting with new recipes.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Admin Officer",
    company: "Department for Work & Pensions",
    description: `Working as an Admin Officer while actively building full-stack projects and sharpening my development skills. Focused on React, Next.js, TypeScript, and Solana blockchain technologies. Actively seeking a return to a full-time software development role.`,
    technologies: ["React", "Next.js", "TypeScript", "Solana"],
  },
  {
    year: "2022 - 2023",
    role: "Travelled & Attended Hacker House Events",
    company: "Solo",
    description: `Participated in Solana Hacker House events in Barcelona and London, deepening knowledge of blockchain technology and Web3 development. Networked with developers and industry professionals while building decentralised applications.`,
    technologies: ["React", "Tailwind CSS", "Rust", "Solana"],
  },
  {
    year: "2021 - 2022",
    role: "Junior Developer",
    company: "Gaian Guardians",
    description: `Developed and enhanced web applications using TypeScript and Tailwind CSS. Collaborated with the team to create responsive user interfaces and contributed to codebase optimisation, debugging, and feature implementation.`,
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "React"],
  },
  {
    year: "2020 - 2021",
    role: "Full Stack Developer Course",
    company: "CareerSwitchIT",
    description: `Completed an intensive full-stack developer course, mastering HTML, CSS, JavaScript, React.js, and Node.js. Built dynamic web applications and gained experience in agile workflows and collaborative coding projects.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Soms Pot - Thai Takeaway",
    image: project1,
    description:
      "A full business website built for a Thai takeaway restaurant. Features a menu, online ordering flow, and responsive design across all devices.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    link: "https://soms-pot-website.vercel.app/",
    githublink: "https://github.com/lukesolgg/soms-pot-website",
  },
  {
    title: "Personal Finance Manager",
    image: project2,
    description:
      "A personal finance tracker built with React and Redux for state management. Track income, expenses, and budgets with an intuitive dashboard interface.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    link: "https://personal-finance-manager.vercel.app/",
    githublink: "https://github.com/lukesolgg/Personal-Finance-Manager",
  },
  {
    title: "Solana Swap DApp",
    image: project3,
    description:
      "A decentralised token swap application on the Solana blockchain. Enables users to swap SPL tokens with real-time price data and wallet integration.",
    technologies: ["TypeScript", "Solana Web3.js", "React", "Next.js"],
    link: "https://solana-swap-dapp.vercel.app/",
    githublink: "https://github.com/lukesolgg/solana-swap-dapp",
  },
  {
    title: "Ski Holiday Planner",
    image: project1,
    description:
      "A ski holiday planning application that helps users find and organise ski trips. Features resort browsing, trip planning tools, and a clean modern UI.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    link: "https://ski-holiday-planner.vercel.app/",
    githublink: "https://github.com/lukesolgg/ski-holiday-planner",
  },
  {
    title: "Career Planner AI",
    image: project2,
    description:
      "An AI-powered career planning tool that helps users map out their career paths. Uses AI to provide personalised career recommendations and goal tracking.",
    technologies: ["TypeScript", "Next.js", "AI/ML", "Tailwind CSS"],
    link: "https://career-planner-ai.vercel.app/",
    githublink: "https://github.com/lukesolgg/Career-Planner-AI",
  },
  {
    title: "Solana Mobile Wallet Tracker",
    image: project3,
    description:
      "A mobile-first application for tracking Solana wallet balances, transaction history, and token holdings in real-time. Built with React Native and Expo.",
    technologies: ["React Native", "TypeScript", "Solana Web3.js", "Expo"],
    link: "https://solana-mobile-wallet-tracker.vercel.app/",
    githublink: "https://github.com/lukesolgg/solana-mobile-wallet-tracker",
  },
];

export const CONTACT = {
  address: "Belfast, Northern Ireland, UK",
  phoneNo: "+44 77520 38819",
  email: "lukeknightdev@gmail.com",
};
