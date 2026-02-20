import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900/20 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-neutral-400 mb-12 max-w-md mx-auto"
      >
        Interested in working together? Feel free to reach out.
      </motion.p>
      <div className="flex flex-col items-center gap-6 text-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 text-neutral-300"
        >
          <FaMapMarkerAlt className="text-cyan-400" />
          <span>{CONTACT.address}</span>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 text-neutral-300"
        >
          <FaPhone className="text-cyan-400" />
          <span>{CONTACT.phoneNo}</span>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors border-b border-cyan-400/30 hover:border-cyan-300 pb-1"
          >
            <FaEnvelope />
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
