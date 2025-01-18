import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900/20 py-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-4 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <motion.p 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-center text-neutral-400 mb-4"
      >
        Scroll Down
      </motion.p>
      <div className="max-w-4xl mx-auto">
        <SimpleBar style={{ maxHeight: 400 }} className="custom-scrollbar">
          <div className="flex flex-col items-center">
            {EXPERIENCES.map((experience, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center justify-center h-[400px] w-full relative text-center mb-6 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="group w-full lg:w-1/4 text-center cursor-pointer"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <p className="mb-2 text-sm text-neutral-400 group-hover:text-purple-100">{experience.year}</p>
                </div>
                <div 
                  className="group w-full max-w-xl lg:w-3/4 text-center cursor-pointer"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <div className="p-4 rounded-lg bg-transparent group-hover:bg-neutral-800/10">
                    <h6 className="mb-2 font-semibold text-center">
                      {experience.role} - <span className="text-sm text-neutral-800">{experience.company}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400 text-center">{experience.description}</p>
                    <div className="flex flex-wrap justify-center">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default Experience;