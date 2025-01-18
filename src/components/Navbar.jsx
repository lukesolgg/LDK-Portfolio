import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing sun and moon icons

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10 text-5xl text-black dark:text-white">LK</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black dark:text-white mr-0">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="p-2 text-gray-600 dark:text-gray-300"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;