import { motion } from "framer-motion";
import ContactIcon from "./ContactIcon";
function ContentContact() {
  return (
    <div className="content grow w-xs md:w-xl lg:w-4xl flex flex-col gap-y-10 my-16  mx-auto items-center">
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <ContactIcon />
      </motion.div>
    </div>
  );
}
export default ContentContact;
