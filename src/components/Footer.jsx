import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4 text-xl text-neutral-400">
          <a
            href="https://www.linkedin.com/in/luke-knight-5a6394205/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lukesolgg"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
            aria-label="X / Twitter"
          >
            <FaSquareXTwitter />
          </a>
        </div>
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Luke Knight. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;