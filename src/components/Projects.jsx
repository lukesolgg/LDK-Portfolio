import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="bg-white dark:bg-black py-20 border-b border-neutral-900/20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl mb-2 text-black dark:text-white"
      >
        My Work
      </motion.h2>
      <motion.p 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-400 mb-10"
      >
        A collection of projects I've worked on.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 shadow-lg shadow-blue-200/30 dark:shadow-blue-800/30 rounded-lg overflow-hidden relative"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover p-3"
            />
            <div className="p-8 flex flex-col items-center text-center"> {/* Increased padding to p-8 */}
              <h6 className="text-xl font-semibold mb-2 text-black dark:text-white">{project.title}</h6>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center mb-8"> {/* Increased margin bottom to mb-8 */}
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <a 
                href={project.githublink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black dark:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black dark:text-white"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;