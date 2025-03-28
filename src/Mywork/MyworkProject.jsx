import { img } from "framer-motion/client";
import data from "../Components/Content/projectData";
import Icon from "../Components/Content/Icon";
function MyworkProject() {
  return (
    <>
      <div className="flex flex-col w-xl">
        <div className="flex flex-col p-4 gap-2">
          {data.map((item) => (
            <>
            <img src={item.img} alt={item.title} className="w-lg"/>
            <h2>{item.title}</h2>
            <span>Tools : </span> 
            <div className="card-tools flex ">
                {item.tools.map(tool =>(
                    <Icon iconSize={40} title={tool.title}/>
                ))}
            </div>
            <div className="card-description">{item.description}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default MyworkProject;
