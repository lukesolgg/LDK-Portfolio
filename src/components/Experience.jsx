import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  // Duplicate the experiences array to simulate infinite scrolling
  const experiences = [...EXPERIENCES, ...EXPERIENCES, ...EXPERIENCES];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="h-[400px] overflow-y-scroll snap-y snap-mandatory">
        <div className="flex flex-col items-center">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className={`snap-center flex flex-col items-center justify-center h-[400px] w-full max-w-4xl mx-auto relative ${index === 0 || index === experiences.length - 1 ? 'opacity-0' : ''}`}
              initial={{ opacity: 0.3, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-full lg:w-1/4 text-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              </motion.div>
              <motion.div 
                className="w-full max-w-xl lg:w-3/4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                <div className="flex flex-wrap justify-center">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;