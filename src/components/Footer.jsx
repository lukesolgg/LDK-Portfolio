import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-sm text-black dark:text-white">
          &copy; 2025 LDK Technologies
        </p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black dark:text-white">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </footer>
  );
};

export default Footer;