import { motion } from "framer-motion";
import CardBio from "./CardBio";
import Experience from "../Components/Content/Experience";
function AboutContent() {
  return (
    <>
      <div className="w-xs md:w-xl lg:w-4xl flex flex-col gap-y-10 my-16  mx-auto items-center">
        <motion.h1
          className="text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About me
        </motion.h1>
        <motion.div
        className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <CardBio />
        </motion.div>
      </div>
    </>
  );
}
export default AboutContent;
