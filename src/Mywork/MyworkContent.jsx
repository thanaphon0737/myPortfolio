import { motion } from "framer-motion";
import MyworkProject from "./MyworkProject";
function MyworkContent() {
  return (
    <>
      <div className="content grow flex flex-col items-center justify-start gap-y-10 my-16">
        <motion.h1
          className="text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Project
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* <CardBio /> */}
          <MyworkProject />
        </motion.div>
      </div>
    </>
  )
}
export default MyworkContent