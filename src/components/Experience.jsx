import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

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
        className="text-center text-neutral-400 mb-12"
      >
        My journey so far.
      </motion.p>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-neutral-800" />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 border-2 border-black z-10 mt-2" />

              {/* Year */}
              <div
                className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                }`}
              >
                <span className="text-sm font-medium text-cyan-400">
                  {experience.year}
                </span>
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 pl-8 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:pl-0"
                }`}
              >
                <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-800/50 hover:shadow-lg hover:shadow-cyan-900/10">
                  <h3 className="font-semibold text-white mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-cyan-400/70 mb-3">
                    {experience.company}
                  </p>
                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-cyan-900/20 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full border border-cyan-800/30"
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
      </div>
    </div>
  );
};

export default Experience;
