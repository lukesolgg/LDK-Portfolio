import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiSolana,
  SiRedux,
  SiVite,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { Icon: SiJavascript, color: "text-yellow-400", name: "JavaScript", duration: 2.5 },
  { Icon: SiTypescript, color: "text-blue-500", name: "TypeScript", duration: 3 },
  { Icon: FaReact, color: "text-cyan-400", name: "React", duration: 2 },
  { Icon: SiNextdotjs, color: "text-white", name: "Next.js", duration: 4 },
  { Icon: FaNodeJs, color: "text-green-500", name: "Node.js", duration: 6 },
  { Icon: SiTailwindcss, color: "text-cyan-300", name: "Tailwind", duration: 3.5 },
  { Icon: SiSolana, color: "text-purple-400", name: "Solana", duration: 5 },
  { Icon: SiRedux, color: "text-purple-600", name: "Redux", duration: 4.5 },
  { Icon: SiVite, color: "text-yellow-300", name: "Vite", duration: 2.8 },
  { Icon: SiGit, color: "text-orange-500", name: "Git", duration: 3.2 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900/20 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {technologies.map(({ Icon, color, name, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="group flex flex-col items-center gap-2"
          >
            <div className="rounded-2xl border border-neutral-800 p-4 transition-all duration-300 hover:border-cyan-800/50 hover:shadow-lg hover:shadow-cyan-900/10">
              <Icon className={`text-6xl ${color}`} />
            </div>
            <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
