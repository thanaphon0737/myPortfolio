import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import Button from "../Button/Button";
import { Link } from "react-scroll";
function Landing() {
  
  return (
    <div className="flex flex-col h-screen items-center justify-center w-xl">
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Thanaphon
      </motion.h1>
      <motion.h2
        className="text-xl text-gray-400 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Web Developer & Computer Vision Enthusiast
      </motion.h2>
      <motion.p
        className="mt-6 text-gray-300 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Passionate about building modern web applications and exploring the
        intersection of AI & vision technology.
      </motion.p>
      <motion.div
        className="flex gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Button name="github" url="https://github.com/thanaphon0737"></Button>
        <Button
          name="linkedin"
          url="https://www.linkedin.com/in/thanaphon-thanusan-4b6469202/?locale=en_US"
        ></Button>
      </motion.div>
      <motion.div
        className="mt-12 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Link to="listIcon" smooth={true} duration={500}>
          <FaArrowDown size={32} className="text-gray-500" />
        </Link>
      </motion.div>
    </div>
  );
}
export default Landing;
