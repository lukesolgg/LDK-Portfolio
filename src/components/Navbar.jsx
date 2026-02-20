import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10 text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          LK
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300 mr-0">
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
        <button
          onClick={toggleTheme}
          className="p-2 text-neutral-400 hover:text-cyan-400 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
