import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-black/0 py-20 border-b border-neutral-900/20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl mb-2"
      >
        My Work
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="text-center text-gray-400 mb-12"
      >
        Recent projects I've built and shipped.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-800/50 hover:shadow-lg hover:shadow-cyan-900/10 hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-cyan-400 transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-cyan-400 transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-cyan-900/20 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full border border-cyan-800/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
