import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/laptopHero.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900/20 pb-4 lg:pb-10 lg:mb-40">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Luke Knight
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-600 px-6 py-3 text-sm font-medium transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Luke Knight"
              className="h-auto max-w-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
