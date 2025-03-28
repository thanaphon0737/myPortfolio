import { div } from "framer-motion/client";
import Experience from "../Components/Content/Experience";
import ListIcon from "../Components/Content/ListIcon";
import Project from "../Components/Content/Project";
function CardBio() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col border-2 rounded-lg w-lg gap-4 p-4 ">
        <h1>Thanaphon Thanusan</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum
          veniam unde excepturi beatae est magni, libero perferendis possimus
          debitis tempore, aliquam consequatur voluptate obcaecati animi
          consectetur? Iste, eum repellendus.
        </p>
      </div>
      <ListIcon />
      <Experience />
      <Project />
    </div>
  );
}
export default CardBio;
