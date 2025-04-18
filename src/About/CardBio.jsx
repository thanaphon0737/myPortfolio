import { div } from "framer-motion/client";
import Experience from "../Components/Content/Experience";
import ListIcon from "../Components/Content/ListIcon";
import Project from "../Components/Content/Project";
import Education from "../Components/Content/Education";
function CardBio() {
  return (
    <div className="w-full flex flex-col gap-12 items-center justify-center my-16 ">
      
        <div className="flex flex-col border-2 rounded-lg gap-4 p-4 ">
          <h1>Thanaphon Thanusan</h1>
          <p className="">
            Seeking a Software Developer position in a dynamic organization
            where I can apply my expertise in webapplication development,
            machine learning, and scalable system design. Skilled in Vue.js,
            React, Socket.io, Docker,Node.js, and SQL databases, with a passion
            for building efficient, high-performance software solutions.
            Committed to continuous learning and innovation in software
            development.
          </p>
        </div>
        <ListIcon />
        <div className="flex flex-col md:flex-row">
          <Experience />
          <Education />
        </div>
      
    </div>
  );
}
export default CardBio;
