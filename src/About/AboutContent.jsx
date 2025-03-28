import { motion } from "framer-motion";
import CardBio from "./CardBio";
import Experience from "../Components/Content/Experience";
function AboutContent() {
  return (
    <>
      <div className="content grow flex flex-col items-center justify-start gap-y-10 my-16">
        <motion.h1
          className="text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About me
        </motion.h1>
        <motion.div
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
